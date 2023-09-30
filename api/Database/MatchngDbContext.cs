using Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Database;

public class MatchngDbContext : DbContext
{
  public MatchngDbContext(DbContextOptions options) : base(options)
  {
  }

  public DbSet<User> Users { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<User>().HasData(new User() { UserId = 1, UserName = "bala" });
    modelBuilder.Entity<User>().HasData(new User() { UserId = 2, UserName = "jeeto" });
  }
}
