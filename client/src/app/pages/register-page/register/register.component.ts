import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    this.authService.register(form.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
