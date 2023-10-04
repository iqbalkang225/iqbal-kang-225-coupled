import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'matchng';

  constructor(
    private httpService: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUserFromLocalStorage();
  }

  getUsers() {
    this.httpService.get('https://localhost:5001/api/users').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });
  }
}
