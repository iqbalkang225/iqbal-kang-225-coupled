using System.ComponentModel.DataAnnotations;

namespace Api.Entities;

public class User
{
  [Key]
  public int UserId { get; set; }

  public string UserName { get; set; } = String.Empty;

  public byte[] PasswordHash { get; set; } = Array.Empty<byte>();

  public byte[] PasswordSalt { get; set; } = Array.Empty<byte>();
}
