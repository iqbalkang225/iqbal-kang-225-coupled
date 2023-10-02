using System.ComponentModel.DataAnnotations;

namespace Api.DTO;

public class RegisterDTO
{
  [Required]
  public string? UserName { get; set; }

  [Required]
  [MinLength(5, ErrorMessage = "password should be more than 5 characters.")]
  public string? Password { get; set; }
}
