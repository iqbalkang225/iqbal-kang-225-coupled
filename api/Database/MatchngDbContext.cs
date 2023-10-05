
using Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Database;

public class MatchngDbContext : DbContext
{
  public MatchngDbContext(DbContextOptions options) : base(options)
  {
  }

  public DbSet<User> Users { get; set; }

}
