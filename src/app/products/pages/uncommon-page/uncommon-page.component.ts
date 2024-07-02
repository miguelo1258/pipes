import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string ='Fernando';
  public gender : 'male'|'female' ='male';
  public invitationMap ={
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void {
    this.name='Melissa'
    this.gender='female'

  }

  // i18plural
  public clients:string[]=['Maria','Fernando','Daniel', 'Camilo','Daniela','Pedro','Luis','Richard','Andres','Felipe']
  public clientsMap ={
    '=0':'0 clientes esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos # clientes esperando',
    'other':'tenemos # clientes esperando'



  }
  deleteClient(): void{
    this.clients.shift();
  }

  //keyvalue pipe
  public person ={
    name: 'Fernando',
    age:36,
    adress: 'otawaa'
  }

  // async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  );

  public promiseValue: Promise <string>= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('tenemos data en la promesa');

    },3500)
  })

}
