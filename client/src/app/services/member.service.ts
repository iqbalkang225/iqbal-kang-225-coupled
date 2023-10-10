import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(environment.apiUrl + 'users');
  }

  getMember(userName: string) {
    return this.http.get<Member>(environment.apiUrl + `users/${userName}`);
  }

  updateMember(member: Member) {
    return this.http.put(environment.apiUrl + 'users', member);
  }
}
