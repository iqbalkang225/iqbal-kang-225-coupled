namespace Api.DTO;

public class MemberDTO
{
  public int UserId { get; set; }

  public string UserName { get; set; } = String.Empty;

  public string KnownAs { get; set; } = String.Empty;

  public string PhotoUrl { get; set; } = String.Empty;

  public int Age { get; set; }

  public DateOnly DateOfBirth { get; set; }

  public DateTime CreatedAt { get; set; }

  public DateTime LastActive { get; set; }

  public string City { get; set; } = String.Empty;

  public string Country { get; set; } = String.Empty;

  public string Gender { get; set; } = String.Empty;

  public string Interests { get; set; } = String.Empty;

  public string LookingFor { get; set; } = String.Empty;

  public string Introduction { get; set; } = String.Empty;

  public List<PhotoDTO> Photos { get; set; } = new List<PhotoDTO>();

}
