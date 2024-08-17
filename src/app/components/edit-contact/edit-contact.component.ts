import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule],
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
}
