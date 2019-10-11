import { Component, OnInit, ViewChild, DebugElement } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  @ViewChild('inputPrenom', {static: true}) inputPrenom: DebugElement;
  // @ContentChild('')
  contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  };

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
   // event.preventDefault();  à utiliser en cas d'embecher la page à se rafraichir
    console.log(this.inputPrenom.nativeElement.value);
    const body = {name: this.contact.prenom + '  ' + this.contact.nom};
    this.contactService.create(body).subscribe((contact)=> {
      console.log('contact:  ', contact);
      this.router.navigate(['contacts']);
    });
  }

}
