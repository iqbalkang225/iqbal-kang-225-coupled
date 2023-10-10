using System.Collections;
using Api.DTO;
using Api.Entities;

namespace Api.ServiceContracts;

public interface IUsersService
{
  Task<List<MemberDTO>> GetAllUsersAsync();

  Task<User?> GetUserByIdAsync(int id);

  Task<MemberDTO?> GetUserByUserNameAsync(string userName);

  // Task<bool> AddUserAsync(User user);

  // Task<bool> UpdateUserAsync(MemberDTO member, MemberEditDTO memberEditDTO);
  Task<bool> UpdateUserAsync(string userName, MemberEditDTO memberEditDTO);

}
