import { Component, OnInit } from '@angular/core';
import { ContactListComponent } from '../../components/contact-list/contact-list.component';

@Component({
  selector: 'app-view-contacts',
  standalone: true,
  imports: [ContactListComponent],
  templateUrl: './view-contacts.component.html',
  styleUrl: './view-contacts.component.css',
})
export class ViewContactsComponent {}
