using Api.Database;
using Api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
  public readonly MatchngDbContext _db;

  public UsersController(MatchngDbContext db)
  {
    _db = db;
  }

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
