using Api.Helpers;
using Api.ServiceContracts;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Options;

namespace Api.Services;

public class PhotoService : IPhotoService
{

  private readonly Cloudinary _cloudinary;

  public PhotoService(IOptions<CloudinarySettings> options)
  {

    Account account = new Account(
    options.Value.CloudName,
    options.Value.APIKey,
    options.Value.APISecret);

    Cloudinary cloudinary = new Cloudinary(account);

    _cloudinary = cloudinary;

  }

  public async Task<ImageUploadResult> UploadImageAsync(IFormFile file)
  {

    Stream fileStream = file.OpenReadStream();

    var uploadParams = new ImageUploadParams()
    {
      File = new FileDescription(file.FileName, fileStream),
      Transformation = new Transformation().Height(500).Width(500).Crop("fill").Gravity("face"),
      Folder = "Coupled"
    };

    ImageUploadResult uploadResult = await _cloudinary.UploadAsync(uploadParams);

    return uploadResult;
  }

  public Task<DeletionResult> DeleteImageAsync(string id)
  {
    throw new NotImplementedException();
  }

}
