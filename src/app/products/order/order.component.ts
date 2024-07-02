import { Component } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public orderby?:keyof Hero;
  public isUpperCase: boolean =false
  public heroes: Hero[]=[
    {
      name:'Superman',
      canFly:true,
      color:Color.blue

    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black

    },
    {
      name:'Robirn',
      canFly:false,
      color:Color.green

    },
    {
      name:'linterna verde',
      canFly:true,
      color:Color.green

    },

  ]

  toggleUpperCase():void{
    this.isUpperCase=!this.isUpperCase

  }

  changeorder(value: keyof Hero)  {

    this.orderby= value;

  }



}
