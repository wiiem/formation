import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model';
import { ContactService } from '../contact.service';
import { Subscription, concat } from 'rxjs';
import { switchMap, map } from "rxjs/operators";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  contact = new Contact();
  subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private contactServie: ContactService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),   // si on ajoute les {} il faut absolument mettre un return à la fin sinon en cas d'une seule itération il ne faut pas mettre les {}
      switchMap((id) => {
      // this.httpClient.get<Contact>('https://jsonplaceholder.typicode.com/users/' + paramMap.get('id')).subscribe((contact) => {
      //   console.log('contact:  ', contact);
      //   this.contact = contact;
      // });
      //console.log("paramMap.get('id'):", paramMap.get('id'));
      return this.contactServie.getById(id)
      })).subscribe((contact) => {
        this.contact = contact;
        console.log('contact returned from server:  ', contact);
    });
  }

}
