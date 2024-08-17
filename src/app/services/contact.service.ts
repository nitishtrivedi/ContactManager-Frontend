import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://localhost:5001/api/contacts';
  constructor(private http: HttpClient) {}

  //Services to backend
  //ADD
  addContact(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Contact>(this.apiUrl, contact, {
      headers,
      responseType: 'json',
    });
  }
  //GET ALL
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  //GET ONE
  getContactByID(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  //PUT
  editContact(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact);
  }

  //DELETE
  deleteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${this.apiUrl}/${id}`);
  }
}
