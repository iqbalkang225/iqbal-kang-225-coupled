import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css'],
})
export class NavLoginComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
