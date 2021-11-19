import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  Nombreuppercase:string = "anderson"
  Nombrelowercase:string = "AnDerson"
  Nombretitlecase:string = "anderson gil velasco"
  fecha:Date = new Date()// el dia de hoy;

  constructor() { }



}
