import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements AfterViewInit {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  contacts: Contact[] = [];
  displayedColumns: string[] = ['Name', 'Phone', 'E-Mail', 'Actions'];
  dataSource = new MatTableDataSource<Contact>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getAllContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  editContact(id: number) {
    this.router.navigate(['edit', id]);
  }
  deleteContact(id: number) {
    if (id) {
      this.contactService.deleteContact(id).subscribe(
        () => {
          this.loadContacts();
          this.toaster.success('Contact Deleted Successfully', 'Delete', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressAnimation: 'increasing',
            progressBar: true,
            closeButton: true,
          });
        },
        (error) => {
          this.toaster.error(`There was an error: ${error}`, 'Delete', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressAnimation: 'increasing',
            progressBar: true,
            closeButton: true,
          });
        }
      );
    }
  }
}
