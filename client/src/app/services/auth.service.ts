import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginUser, UserResponse } from '../models/User';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<UserResponse | null>(null);

  constructor(private http: HttpClient) {}

  login(user: LoginUser) {
    return this.http
      .post<UserResponse>(environment.apiUrl + 'login', user)
      .pipe(tap(this.saveUser.bind(this)));
  }

  saveUser(user: UserResponse) {
    localStorage.setItem('coupledUser', JSON.stringify(user));
    this.user$.next(user);
  }

  loadUser() {
    const userString = localStorage.getItem('coupledUser');

    if (!userString) return this.user$.next(null);

    const user = JSON.parse(userString);
    this.user$.next(user);
  }

  removeUser() {
    localStorage.removeItem('coupledUser');
    this.user$.next(null);
  }
}
