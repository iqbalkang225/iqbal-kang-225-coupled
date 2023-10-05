using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Entities;

[Table("Photos")]
public class Photo
{

  public int PhotoId { get; set; }

  public string PhotoUrl { get; set; } = String.Empty;

  public bool IsMain { get; set; }

  // public int UserId { get; set; }

  [ForeignKey("UserId")]
  public User? User { get; set; }

}
