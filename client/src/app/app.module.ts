import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { NavLoginComponent } from './components/navbar/nav-login/nav-login.component';
import { NavLinksComponent } from './components/navbar/nav-links/nav-links.component';
import { NavLogoComponent } from './components/navbar/nav-logo/nav-logo.component';
import { MatchesListComponent } from './pages/matches-page/matches-list/matches-list.component';
import { MatchesDetailsComponent } from './pages/matches-page/matches-details/matches-details.component';
import { HomeComponent } from './pages/home-page/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavLoginComponent,
    NavLinksComponent,
    NavLogoComponent,
    MatchesListComponent,
    MatchesDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
