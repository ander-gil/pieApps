import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {


     nombre: string ='anderson gil';
     genero: string ='masculino'


  invitacionMap={
    masculino:'invitarlo',
    femenino:'invitarla',
  }

  constructor(private primengConfig:PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }


  //I18nPluralPipe (pipe no comun)

  nombres: string []= ['anderson', 'pedro', 'carlos', 'maria', 'esteban', 'pablo'];

  mensajeMAPA={
    '=0': 'cero clientes activos en nuestro sistema',
    '=1': '1 cliente activo en nuestro sistema',
    '=2': '2 clientes activos en nuestro sistema',
    '=3': '3 clientes activos en nuestro sistema',
    'other': '# clientes activos en nuestro sistema'
  }

  borrarCliente(){
    this.nombres.splice(0, 1);
  }

  CambiarInvitado(){

    if(this.genero="femenino"){
      this.nombre="sorjuana";
      this.genero="femenino";
    }else{
      this.nombre="anderson gil";
      this.genero="masculino";
    }
  }

          // keyValue pipe

    persona={
      nombre:'anderson',
      edad:29,
      direccion:'carrera 3n #7n-09',
    }

     // JsonPipe

    heroes = [
      {
        nombre:'superman',
        vuela:true
      },
      {
        nombre:'spiderman',
        vuela:false
      },
      {
        nombre:'batman',
        vuela:true
      }
    ]

    // Async Pipe

    // usandolo con observable
    miObservable = interval(1000)

    // usandolo con promesas

    valorPromesa= new Promise((resolver, reject)=>{
      setTimeout(()=>{
        resolver('tenemos data de promesa');
      },3500);
    })

}
