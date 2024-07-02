import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPaceComponent } from './pages/basics-pace/basics-pace.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPaceComponent,
    UncommonPageComponent,
    NumbersComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule

  ]
})
export class ProductsModule { }
