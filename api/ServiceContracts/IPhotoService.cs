using CloudinaryDotNet.Actions;

namespace Api.ServiceContracts;

public interface IPhotoService
{

  Task<ImageUploadResult> UploadImageAsync(IFormFile file);
  // Task<ImageUploadResult> UploadImageAsync(List<IFormFile> files);

  Task<DeletionResult> DeleteImageAsync(string id);

}
