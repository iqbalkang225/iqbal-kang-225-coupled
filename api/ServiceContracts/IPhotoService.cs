using CloudinaryDotNet.Actions;

namespace Api.ServiceContracts;

public interface IPhotoService
{

  Task<ImageUploadResult> UploadImageAsync(IFormFile file);

  Task<DeletionResult> DeleteImageAsync(string id);

}
