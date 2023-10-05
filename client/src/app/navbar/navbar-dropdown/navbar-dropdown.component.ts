import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.css'],
})
export class NavbarDropdownComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.removeUserFromLocalStorage();
    this.router.navigateByUrl('/');
  }
}
