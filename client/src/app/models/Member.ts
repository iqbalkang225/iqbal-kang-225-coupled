import { Photo } from './Photo';

export interface Member {
  userId: number;
  userName: string;
  knownAs: string;
  photoUrl: string;
  age: number;
  dateOfBirth: Date;
  createdAt: Date;
  lastActive: Date;
  city: string;
  country: string;
  gender: string;
  interests: string;
  lookingFor: string;
  introduction: string;
  photos: Photo[];
}
