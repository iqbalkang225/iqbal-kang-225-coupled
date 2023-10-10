import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  btnContainerClasses =
    'bg-white flex flex-col absolute rounded-2xl text-body-light w-full overflow-hidden top-[120%] text-center';
  innerBtnClasses = 'hover:text-white hover:bg-purple py-2 cursor-pointer';

  arrowIcon = faCaretDown;
  isButtonOpen = false;

  constructor(public authService: AuthService) {}

  onLogout() {
    this.authService.removeUser();
    this.toggleButton();
  }

  toggleButton() {
    this.isButtonOpen = !this.isButtonOpen;
  }

  getButtonClasses() {
    if (this.isButtonOpen) return 'rounded-tr-full bg-purple';
    else return '';
  }
}
