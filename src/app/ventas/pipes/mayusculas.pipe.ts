import { Pipe, PipeTransform } from "@angular/core";




    @Pipe({
      name:'mayusculas'
    })
  export class MayusculasPipe implements PipeTransform {

    transform(valor :string, siMayuscula:boolean = true) :string {
      if(siMayuscula){
        return valor.toUpperCase()
      }else{
        return valor.toLowerCase();
      }

      }

  }
