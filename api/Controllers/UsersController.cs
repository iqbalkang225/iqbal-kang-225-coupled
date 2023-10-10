using System.Security.Claims;
using Api.DTO;
using Api.Entities;
using Api.ServiceContracts;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Authorize]
public class UsersController : CustomControllerBase
{
  public readonly IUsersService _userService;
  public readonly IMapper _mapper;

  public UsersController(IUsersService userService, IMapper mapper)
  {
    _userService = userService;
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

}
