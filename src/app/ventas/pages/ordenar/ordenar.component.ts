import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  orden:string="";
  valor:boolean = false;
  heroes:Heroe[]= [
    {
      nombre:'superman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'spiderman',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'daredevil',
      vuela:false,
      color:Color.verde
    },
  ];

  cambiar(){
    this.valor= !this.valor;
  }

  cambiarOrden(valor:string){
    this.orden = valor;
  }



}
