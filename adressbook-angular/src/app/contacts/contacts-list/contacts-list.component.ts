import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { Contact } from '../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<Contact[]>;   // le $ est plutot pour indique qu'il s'agit d'un observale
  constructor(private title: Title, private httpClient: HttpClient) {   // remplace la déclaration title en haut ensuite this.title = title à l'intérieur du constructeur pour pouvoir l'utiliser directement dans l'init
   }

  ngOnInit() {
    this.title.setTitle('Contacts form');   // changer le titre de l'application ds l'onglet
    this.contacts$ = this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

}
