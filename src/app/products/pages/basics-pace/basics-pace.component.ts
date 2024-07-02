import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pace',
  templateUrl: './basics-pace.component.html',
  styleUrl: './basics-pace.component.css'
})
export class BasicsPaceComponent {

  public nameLower:string='Miguel'
  public nameUpper:string='MIGUEL'
  public fullName:string= 'MiGuel BALLESteros'

  public customDate: Date = new Date();


}
