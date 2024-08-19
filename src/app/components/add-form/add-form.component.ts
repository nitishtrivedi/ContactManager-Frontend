import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
  contact: Contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  onSubmit(): void {
    this.contactService.addContact(this.contact).subscribe(
      (response) => {
        this.toaster.success('Contact Added Successfully', 'Add Contact', {
          timeOut: 4000,
          positionClass: 'toast-top-right',
          progressAnimation: 'increasing',
          progressBar: true,
          closeButton: true,
        });
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('There was an error', error);
      }
    );
  }
}
