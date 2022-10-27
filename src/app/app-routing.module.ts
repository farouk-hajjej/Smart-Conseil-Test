import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WHOAREWE1Component} from './whoarewe1/whoarewe1.component';
import {WHOAREWE2Component} from './whoarewe2/whoarewe2.component';
import {AccueilComponent} from './accueil/accueil.component';



const routes: Routes =

   [
     {
     path: 'home',
  component: AccueilComponent,
  children: [
  {
    path: 'Test',
    children: [

      { path: 'whoarewe1', component: WHOAREWE1Component },
      { path: 'whoarewe2', component: WHOAREWE2Component }

    ]
  },
    ]
     }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
