import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    this.authService.register(form.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
