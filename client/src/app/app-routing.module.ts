import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { FavoritesComponent } from './pages/favorites-page/favorites/favorites.component';
import { MessagesComponent } from './pages/messages-page/messages/messages.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './pages/register-page/register/register.component';
import { MembersListComponent } from './pages/explore-page/members-list/members-list.component';
import { MemberDetailsComponent } from './pages/explore-page/member-details/member-details.component';
import { MemberEditComponent } from './pages/explore-page/member-edit/member-edit.component';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MembersListComponent },
      { path: 'members/:username', component: MemberDetailsComponent },
      {
        path: 'member/edit',
        component: MemberEditComponent,
        canDeactivate: [unsavedChangesGuard],
      },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'messages', component: MessagesComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
