using System.ComponentModel.DataAnnotations;

namespace Api.DTO;

public class LoginDTO
{
  [Required]
  public string UserName { get; set; } = String.Empty;

  public string Password { get; set; } = String.Empty;
}
