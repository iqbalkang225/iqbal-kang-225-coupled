using Api.DTO;
using Api.Entities;
using Api.Extensions;
using AutoMapper;

namespace Api.Helpers;

public class AutoMapperProfiles : Profile
{
  public AutoMapperProfiles()
  {
    // CreateMap<MemberDTO>(User);
    CreateMap<User, MemberDTO>()
      .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).PhotoUrl))
    .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

    CreateMap<Photo, PhotoDTO>();
  }
}

