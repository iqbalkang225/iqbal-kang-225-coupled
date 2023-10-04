import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.css'],
})
export class NavbarDropdownComponent {
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.removeUserFromLocalStorage();
  }
}
