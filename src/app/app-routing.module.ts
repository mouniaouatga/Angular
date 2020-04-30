import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//ziyada
import {HomeComponent} from './home/home.Component';
import{AddComponent} from './add/add.component';

//import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"add",component:AddComponent},
  // randiro hna daba rout par defaut howa home:Za3ma une fois iban lih le vide idini home ourl full mean kifma howa ikhalih
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  //   ,BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
