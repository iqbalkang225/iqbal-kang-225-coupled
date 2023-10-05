import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchListComponent } from './matches/match-list/match-list.component';
import { MatchDetailsComponent } from './matches/match-details/match-details.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    // pathMatch: 'full',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {
        path: 'matches',
        component: MatchListComponent,
        children: [{ path: ':id', component: MatchDetailsComponent }],
      },
      { path: 'list', component: ListComponent },
      { path: 'messages', component: MessagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
