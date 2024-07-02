import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuItems?: MenuItem[];

  ngOnInit() {
    this.menuItems = [
          {
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'textos y fechas',
                icon: 'pi pi-align-left',
                routerLink:'/'

              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink:'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink:'uncommon'

              }
            ]

           },
           {

            label: 'pipe personalizados',
            icon: 'pi pi-cog',
            items:[
              {
                label:'otro elemento',
                icon:'pi pi-cog',
                routerLink: 'custom'

              }
            ]

           }

         ];



    }
}


