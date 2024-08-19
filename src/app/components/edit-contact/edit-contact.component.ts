import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent implements OnInit {
  contact: Contact | undefined;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.contactService.getContactByID(id).subscribe((data) => {
          this.contact = data;
        });
      }
    });
  }

  editContact() {
    if (this.contact) {
      var updatedContactDetails = this.contact;
      this.route.paramMap.subscribe((params) => {
        var contactID = Number(params.get('id'));
        this.contactService
          .editContact(contactID, updatedContactDetails)
          .subscribe(
            (response) => {
              this.toaster.success(
                'Contact Modified Successfully',
                'Edit Contact',
                {
                  timeOut: 4000,
                  positionClass: 'toast-top-right',
                  progressAnimation: 'increasing',
                  progressBar: true,
                  closeButton: true,
                }
              );
              this.router.navigate(['/']);
            },
            (error) => {
              console.log(error);
            }
          );
      });
    }
  }
}
