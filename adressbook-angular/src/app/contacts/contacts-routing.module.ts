import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsLayoutComponent } from './contacts-layout/contacts-layout.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';


const routes: Routes = [
  {
  path:'contacts',
  component: ContactsLayoutComponent,
  children:
    [{
      path: 'add',  // url -> /contacts/add
      component: ContactsAddComponent
    },
    {
      path: ':id',  // URL -> /contacts/123
      component: ContactsDetailsComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
