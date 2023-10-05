namespace Api.DTO;

public class PhotoDTO
{
  public int PhotoId { get; set; }

  public string PhotoUrl { get; set; } = String.Empty;

  public bool IsMain { get; set; }

}
