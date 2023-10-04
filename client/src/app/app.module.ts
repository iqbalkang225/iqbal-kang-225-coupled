import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarFormComponent } from './navbar/navbar-form/navbar-form.component';
import { NavbarDropdownComponent } from './navbar/navbar-dropdown/navbar-dropdown.component';
import { NavbarLinksComponent } from './navbar/navbar-links/navbar-links.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NavbarFormComponent, NavbarDropdownComponent, NavbarLinksComponent, HomeComponent, RegisterFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
