import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

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
import { MatchListComponent } from './matches/match-list/match-list.component';
import { MatchDetailsComponent } from './matches/match-details/match-details.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarFormComponent,
    NavbarDropdownComponent,
    NavbarLinksComponent,
    HomeComponent,
    RegisterFormComponent,
    MatchListComponent,
    MatchDetailsComponent,
    ListComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
