using System.Security.Cryptography;
using System.Text;
using Api.Database;
using Api.DTO;
using Api.Entities;
using Api.ServiceContracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

// api/auth
public class AuthController : CustomControllerBase
{
  private readonly MatchngDbContext _context;
  private readonly ITokenService _tokenService;

  // constructor
  public AuthController(MatchngDbContext context, ITokenService tokenService)
  {
    _context = context;
    _tokenService = tokenService;
  }

  // api/auth/register (register user)
  [HttpPost("register")]
  public async Task<ActionResult<User>> Register(RegisterDTO registerDTO)
  {
    // making sure username and password is present
    if (registerDTO.UserName == null) return BadRequest("username is required.");
    if (registerDTO.Password == null) return BadRequest("password is required.");

    // check if the username is already taken by some other user
    if (await UserAlreadyExists(registerDTO.UserName)) return BadRequest("username is already taken.");

    // creating hmac class which will be auto disposed because of "using"
    using HMACSHA512 hmac = new HMACSHA512();

    // converting password from string to byte array
    byte[] hashByte = Encoding.UTF8.GetBytes(registerDTO.Password);

    // creating a new user object
    User user = new User()
    {
      UserName = registerDTO.UserName,
      PasswordHash = hmac.ComputeHash(hashByte),
      PasswordSalt = hmac.Key
    };

    // saving newly generated user object into the database
    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    return user;
  }

  // api/auth/login (login user)
  [HttpPost("login")]
  public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
  {
    // making sure username and password is present
    if (loginDTO.UserName == null) return Unauthorized("invalid credentials.");
    if (loginDTO.Password == null) return Unauthorized("invalid credentials.");

    // search for user in the database
    User? user = await _context.Users.SingleOrDefaultAsync(user => user.UserName == loginDTO.UserName);

    // if no user is found, the user is unauthorized
    if (user == null) return Unauthorized("invalid credentials.");

    // creating hmac class with specific salt which will be auto disposed because of "using"
    using HMACSHA512 hmac = new HMACSHA512(user.PasswordSalt);

    // converting password from string to byte array
    byte[] hashByte = Encoding.UTF8.GetBytes(loginDTO.Password);

    // computing a new hash for login user to compare against the saved hash in the database
    var passwordHash = hmac.ComputeHash(hashByte);

    // looping through the byte hash array to compare the hashes
    for (int i = 0; i < passwordHash.Length; i++)
    {
      if (passwordHash[i] != user.PasswordHash[i]) return Unauthorized("invalid credentials.");
    }

    return new UserDTO()
    {
      UserName = user.UserName,
      Token = _tokenService.CreateJWT(user)
    };

  }

  // method to check if user already exists in the database
  public async Task<bool> UserAlreadyExists(string userName)
  {
    return await _context.Users.AnyAsync(user => user.UserName == userName);
  }

}
