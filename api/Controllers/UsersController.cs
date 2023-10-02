using Api.Database;
using Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Authorize]
public class UsersController : CustomControllerBase
{
  public readonly MatchngDbContext _db;

  public UsersController(MatchngDbContext db)
  {
    _db = db;
  }

  [AllowAnonymous]
  [HttpGet]
  public async Task<ActionResult<List<User>>> GetUsers()
  {
    return await _db.Users.ToListAsync();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<User>> GetUser(int id)
  {
    User? user = await _db.Users.FindAsync(id);

    if (user == null) return NotFound();

    return user;
  }
}
