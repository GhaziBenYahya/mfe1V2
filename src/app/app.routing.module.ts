import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const routes: Routes = [
    {path:'',loadChildren:()=>import('../app/order/order.module').then(m=>m.OrderModule)},
    {
        path:'mfe-rule',
        loadChildren:()=>{
            return loadRemoteModule({
                type:'module',
                remoteEntry:"http://localhost:4003/remoteEntry.js",
                exposedModule:"./OrderModule"
            }).then(m=>m.OrderModule).catch(e=>console.log(e));
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule ],
    exports: [RouterModule],
     
})
export class OrderRoutingModule {}