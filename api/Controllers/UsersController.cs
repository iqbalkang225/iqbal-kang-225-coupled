using Api.DTO;
using Api.Entities;
using Api.ServiceContracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Authorize]
public class UsersController : CustomControllerBase
{
  public readonly IUsersService _userService;

  public UsersController(IUsersService userService)
  {
    _userService = userService;
  }

  [AllowAnonymous]
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

  // [HttpPost]
  // public async Task<ActionResult> AddUser()
  // {
  //   return Ok();
  // }
}
