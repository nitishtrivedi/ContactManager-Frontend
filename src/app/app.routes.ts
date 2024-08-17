import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AddContactsComponent } from './pages/add-contacts/add-contacts.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { ViewContactComponent } from './pages/view-contact/view-contact.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'add', component: AddContactsComponent },
  { path: 'view', component: ViewContactsComponent }, //List of Contacts
  { path: 'edit/:id', component: ViewContactComponent }, //Single Contact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
