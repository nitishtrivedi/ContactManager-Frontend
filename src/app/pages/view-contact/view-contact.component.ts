import { Component } from '@angular/core';
import { EditContactComponent } from '../../components/edit-contact/edit-contact.component';

@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [EditContactComponent],
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css',
})
export class ViewContactComponent {}
