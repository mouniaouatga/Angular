import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Nom :String;
Prenom:String;
Tel:number;
Date:Date;
status:String;
Contacts:Object[];
  constructor() { }

  ngOnInit(){
    //pour instancier les val okatnafad une fois kancharji la page

    //  this.Nom="Samadi";
    //  this.Prenom="samir";
    //  this.Tel= 30634793445;
    //  this.status="active";
    // this.Date=new Date();

     this.Contacts=[
      {nom:"smadai",prenom:"ouatgammi",tel:"123456780",status:"active"} ,
     {nom:"rayane",prenom:"hamoudi",tel:"123456780",status:"active"} ,
       {nom:"sousou",prenom:"aichiixi",tel:"123456780",status:"inactive"} ,
      


     
     ]
  }

}
