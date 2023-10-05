using Api.Database;
using Api.DTO;
using Api.Entities;
using Api.ServiceContracts;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Api.Services;

public class UsersService : IUsersService
{
  private readonly MatchngDbContext _context;
  private readonly IMapper _mapper;

  public UsersService(MatchngDbContext context, IMapper mapper)
  {
    _context = context;
    _mapper = mapper;
  }

  //! adds new user to the DB
  public async Task<bool> AddUserAsync(User user)
  {
    _context.Users.Add(user);
    return await _context.SaveChangesAsync() > 0;

  }

  // gets all the users from the DB
  public async Task<List<User>> GetAllUsersAsync()
  {
    return await _context.Users.Include("Photos").ToListAsync();
  }

  //! gets a single user from DB with the matching id
  public async Task<User?> GetUserByIdAsync(int id)
  {
    return await _context.Users.FindAsync(id);
  }

  // gets a single user from DB with the matching username
  public async Task<MemberDTO?> GetUserByUserNameAsync(string userName)
  {
    User? user = await _context.Users.Include("Photos").FirstOrDefaultAsync(temp => temp.UserName == userName);

    if (user == null) return null;

    return _mapper.Map<MemberDTO>(user);
  }
}
