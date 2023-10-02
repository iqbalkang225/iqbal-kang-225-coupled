using Api.Entities;

namespace Api.ServiceContracts;

public interface ITokenService
{
  string CreateJWT(User user);
}
