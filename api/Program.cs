using Api.Extensions;

var builder = WebApplication.CreateBuilder(args);

// add services to the container.
builder.Services.AddControllers();

// adding services through extension methods
builder.Services.AddApplicationSevice(builder.Configuration);
builder.Services.AddIdentityService(builder.Configuration);

var app = builder.Build();

app.UseHttpsRedirection();

// adding the cors middleware
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));

// adding authentication middlewares
app.UseAuthentication();
app.UseAuthorization();

// adding the controllers
app.MapControllers();

// starting the app
app.Run();
