import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginUser, RegisterUser, UserResponse } from '../models/User';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<UserResponse | null>(null);

  constructor(private http: HttpClient) {}

  // registering the user
  register(user: RegisterUser) {
    return this.http
      .post<UserResponse>(environment.apiUrl + 'auth/register', user)
      .pipe(tap(this.saveUser.bind(this)));
  }

  // logging user in
  login(user: LoginUser) {
    return this.http
      .post<UserResponse>(environment.apiUrl + 'auth/login', user)
      .pipe(tap(this.saveUser.bind(this)));
  }

  // saving the user in the db and populating the observer with the user
  saveUser(user: UserResponse) {
    localStorage.setItem('coupledUser', JSON.stringify(user));
    this.user$.next(user);
  }

  // checking and loading, if the user is saved in the local storage
  loadUser() {
    const userString = localStorage.getItem('coupledUser');

    if (!userString) return this.user$.next(null);

    const user = JSON.parse(userString);
    this.user$.next(user);
  }

  // logging user out and returning null for the observable
  removeUser() {
    localStorage.removeItem('coupledUser');
    this.user$.next(null);
  }
}
