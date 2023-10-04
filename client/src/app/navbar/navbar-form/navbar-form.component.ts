import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-form',
  templateUrl: './navbar-form.component.html',
  styleUrls: ['./navbar-form.component.css'],
})
export class NavbarFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
