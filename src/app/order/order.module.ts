import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module'
import { OrderComponent } from './order.component';
// app.module.ts
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { ListworkflowComponent } from './listworkflow/listworkflow.component';
import { ManagesComponent } from './manages/manages.component';
import { EditComponent } from './edit/edit.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'; 
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    WorkflowComponent,
    OrderComponent,
    AddworkflowComponent,
    ListworkflowComponent,
    ManagesComponent,
    EditComponent,
    
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    
  ],
  providers: [ServiceService], // Ajoutez votre service aux fournisseurs
})
export class OrderModule { }
