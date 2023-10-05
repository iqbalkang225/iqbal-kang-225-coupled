using System.ComponentModel.DataAnnotations;

namespace Api.Entities;

public class User
{
  [Key]
  public int UserId { get; set; }

  public string UserName { get; set; } = String.Empty;

  public byte[] PasswordHash { get; set; } = Array.Empty<byte>();

  public byte[] PasswordSalt { get; set; } = Array.Empty<byte>();

  public string KnownAs { get; set; } = String.Empty;

  public DateOnly DateOfBirth { get; set; }

  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

  public DateTime LastActive { get; set; } = DateTime.UtcNow;

  public string City { get; set; } = String.Empty;

  public string Country { get; set; } = String.Empty;

  public string Gender { get; set; } = String.Empty;

  public string Interests { get; set; } = String.Empty;

  public string LookingFor { get; set; } = String.Empty;

  public string Introduction { get; set; } = String.Empty;

  public List<Photo> Photos { get; set; } = new List<Photo>();

}
