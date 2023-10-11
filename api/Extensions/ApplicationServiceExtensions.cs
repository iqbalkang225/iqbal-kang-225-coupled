using Api.Helpers;
using Api.Database;
using Api.ServiceContracts;
using Api.Services;
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
    service.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));
    service.AddScoped<IPhotoService, PhotoService>();

    service.AddDbContext<MatchngDbContext>(options =>
    {
      options.UseSqlite(config.GetConnectionString("DefaultConnection"));
    });
  }

}
