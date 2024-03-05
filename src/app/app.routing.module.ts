import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MatListModule } from '@angular/material/list';


export const routes: Routes = [
    {path:'',loadChildren:()=>import('../app/order/order.module').then(m=>m.OrderModule)}

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    MatListModule],
    exports: [RouterModule],
     
})
export class OrderRoutingModule {}