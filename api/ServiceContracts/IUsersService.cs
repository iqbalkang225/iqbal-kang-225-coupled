using System.Collections;
using Api.DTO;
using Api.Entities;

namespace Api.ServiceContracts;

public interface IUsersService
{
  Task<List<MemberDTO>> GetAllUsersAsync();

  Task<User?> GetUserByIdAsync(int id);

  Task<MemberDTO?> GetUserByUserNameAsync(string userName);

  Task<User?> GetUserAsync(string userName);

  Task<bool> UpdateUserAsync(string userName, MemberEditDTO memberEditDTO);

  Task<bool> SaveAllChangesAsync();

}
