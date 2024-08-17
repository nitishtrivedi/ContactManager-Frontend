import { Component } from '@angular/core';
import { AddFormComponent } from '../../components/add-form/add-form.component';

@Component({
  selector: 'app-add-contacts',
  standalone: true,
  imports: [AddFormComponent],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css',
})
export class AddContactsComponent {}
