using Api.Database;
using Api.ServiceContracts;
using Api.Services;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace Api.Extensions;

public static class ApplicationServiceExtensions
{
  public static void AddApplicationSevice(this IServiceCollection service, IConfiguration config)
  {
    service.AddCors();
    service.AddScoped<ITokenService, TokenService>();
    service.AddScoped<IUsersService, UsersService>();
    service.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    service.AddDbContext<MatchngDbContext>(options =>
    {
      options.UseSqlite(config.GetConnectionString("DefaultConnection"));
    });
  }

}
