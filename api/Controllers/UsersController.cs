using System.Security.Claims;
using Api.DTO;
using Api.Entities;
using Api.ServiceContracts;
using Api.Services;
using AutoMapper;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Authorize]
public class UsersController : CustomControllerBase
{
  public readonly IUsersService _userService;

  public readonly IPhotoService _photoService;

  public readonly IMapper _mapper;

  public UsersController(IUsersService userService, IPhotoService photoService, IMapper mapper)
  {
    _userService = userService;

    _photoService = photoService;

    _mapper = mapper;
  }

  [HttpGet]
  public async Task<ActionResult<List<MemberDTO>>> GetUsers()
  {
    return await _userService.GetAllUsersAsync();
  }

  [HttpGet("{id:int}")]
  public async Task<ActionResult<User>> GetUserById(int id)
  {
    User? user = await _userService.GetUserByIdAsync(id);

    if (user == null) return NotFound();

    return user;
  }

  [HttpGet("{userName}")]
  public async Task<ActionResult<MemberDTO>> GetUserByUserName(string userName)
  {
    MemberDTO? memberDTO = await _userService.GetUserByUserNameAsync(userName);

    if (memberDTO == null) return NotFound();

    return memberDTO;
  }

  [HttpPut]
  public async Task<ActionResult> UpdateUser(MemberEditDTO memberEditDTO)
  {
    var userName = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

    if (userName == null) return BadRequest("No user was found.");

    bool result = await _userService.UpdateUserAsync(userName, memberEditDTO);

    if (result) return NoContent();

    return BadRequest("Failed to update the profile.");
  }

  [HttpPost("add-photo")]
  public async Task<ActionResult<PhotoDTO>> UploadImageToCloudinary(IFormFile file)
  {

    if (file.Length <= 0) return BadRequest("Photo is required.");

    var userName = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

    if (userName == null) return Unauthorized();

    User? user = await _userService.GetUserAsync(userName);

    if (user == null) return NotFound();

    ImageUploadResult result = await _photoService.UploadImageAsync(file);

    if (result.Error != null) return BadRequest(result.Error.Message);

    Photo photo = new Photo()
    {
      PhotoUrl = result.SecureUrl.AbsoluteUri,
      PublicId = result.PublicId,
    };

    if (user.Photos.Count == 0) photo.IsMain = true;


    user.Photos.Add(photo);

    if (await _userService.SaveAllChangesAsync()) return _mapper.Map<PhotoDTO>(photo);

    return BadRequest("Something went wrong.");
  }

}
