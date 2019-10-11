import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContactsModule } from './contacts/contacts.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContactsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,  // route ** et de preference aussi de mettre appRouting ou le composant racine ou pere après les enfants pour question d'url
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
