using Api.Database;
using Api.DTO;
using Api.Entities;
using Api.ServiceContracts;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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
  public async Task<bool> AddUserAsync(MemberDTO member)
  {
    // _mapper.Map<User>(member);
    // _mapper.Map(User, member);
    // _context.Users.Add(user);
    return await _context.SaveChangesAsync() > 0;
    // return true;

  }

  public async Task<bool> UpdateUserAsync(string userName, MemberEditDTO memberEditDTO)
  {

    User? user = await _context.Users.FirstOrDefaultAsync(temp => temp.UserName == userName);

    if (user == null) return false;

    _mapper.Map(memberEditDTO, user);
    return await _context.SaveChangesAsync() > 0;

  }



  // gets all the users from the DB
  public async Task<List<MemberDTO>> GetAllUsersAsync()
  {
    List<User> users = await _context.Users.Include("Photos").ToListAsync();

    return _mapper.Map<List<MemberDTO>>(users);
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
