import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, UserResponse } from '../models/User';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<UserResponse | null>(null);

  constructor(private httpService: HttpClient) {}

  login(data: LoginUser) {
    return this.httpService
      .post<UserResponse>('https://localhost:5001/api/auth/login', data)
      .pipe(tap(this.saveUserToLocalStorage.bind(this)));
  }

  saveUserToLocalStorage(user: UserResponse) {
    localStorage.setItem('matchngUser', JSON.stringify(user));
    this.user$.next(user);
  }

  getUserFromLocalStorage() {
    const userString: string | null = localStorage.getItem('matchngUser');

    if (!userString) return this.user$.next(null);

    const user: UserResponse = JSON.parse(userString);
    this.user$.next(user);
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem('matchngUser');
    this.user$.next(null);
  }
}
