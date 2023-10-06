import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { MatchesListComponent } from './pages/matches-page/matches-list/matches-list.component';
import { FavoritesComponent } from './pages/favorites-page/favorites/favorites.component';
import { MessagesComponent } from './pages/messages-page/messages/messages.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'matches', component: MatchesListComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'messages', component: MessagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
