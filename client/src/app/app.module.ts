import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLoginComponent } from './components/navbar/nav-login/nav-login.component';
import { NavLinksComponent } from './components/navbar/nav-links/nav-links.component';
import { NavLogoComponent } from './components/navbar/nav-logo/nav-logo.component';
import { HomeComponent } from './pages/home-page/home.component';
import { RegisterComponent } from './pages/register-page/register/register.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MembersListComponent } from './pages/explore-page/members-list/members-list.component';
import { MemberCardComponent } from './pages/explore-page/member-card/member-card.component';
import { BtnCircleComponent } from './components/btn-circle/btn-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavLoginComponent,
    NavLinksComponent,
    NavLogoComponent,
    RegisterComponent,
    MembersListComponent,
    MemberCardComponent,
    BtnCircleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: JwtInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
