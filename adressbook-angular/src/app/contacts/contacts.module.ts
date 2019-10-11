import { NgModule } from "@angular/core";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactsAddComponent } from "./contacts-add/contacts-add.component";
import { ContactsLayoutComponent } from "./contacts-layout/contacts-layout.component";
import { ContactsDetailsComponent } from "./contacts-details/contacts-details.component";
import { MatListModule } from "@angular/material/list";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsAddComponent,
    ContactsLayoutComponent,
    ContactsDetailsComponent
  ],
  imports: [SharedModule, ContactsRoutingModule, MatListModule]
})
export class ContactsModule {}
