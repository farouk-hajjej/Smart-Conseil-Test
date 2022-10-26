import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
