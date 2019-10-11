import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }
  getById(id): Observable<Contact> {
    return this.httpClient.get<Contact>('https://jsonplaceholder.typicode.com/users/' + id);
  }

  create(contact) {
    return this.httpClient.post<Contact>('https://jsonplaceholder.typicode.com/users/', contact);
  }
}
