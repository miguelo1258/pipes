import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPaceComponent } from './pages/basics-pace/basics-pace.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:'',
    component:BasicsPaceComponent
  },
  {
    path:'numbers',
    component:NumbersComponent
  },
  {
    path:'uncommon',
    component:UncommonPageComponent
  },
  {
    path:'custom',
    component:OrderComponent
  },
  {
    path:'**',
    component:BasicsPaceComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
