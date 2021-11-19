import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  iconos:string= 'pi pi-fw pi-plus'

  constructor() {
    this.items = [
      {
        label: 'pibes de angular',
          icon: 'pi pi-desktop',
          items: [
                    {
                      label: 'Textos y Fechas',
                      icon: 'pi pi-calendar',
                      routerLink:'/'
                    },
                    {
                      label: 'Numeros',
                      icon: 'pi pi-dollar',
                      routerLink:'numeros'
                    },
                    {
                      label: 'No Comunes',
                      icon: 'pi pi-globe',
                      routerLink:'no_comunes'
                    }

                ],
      },
      {
        label: 'pibes Personalizados',
          icon: 'pi pi-cog',
          routerLink:'ordenar',
          items: [],
      },


    ];
  }

  ngOnInit(): void {}
}
