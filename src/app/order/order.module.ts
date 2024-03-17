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
import { EditComponent } from './edit/edit.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { StepsComponent } from './create-flow/steps/steps.component';
import { CreateWorkflowComponent } from './create-flow/create-workflow/create-workflow.component';
import {CreateFlowComponent} from './create-flow/create-flow.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        OrderComponent,
        HeaderComponent,
        SidebarComponent
      ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        MatListModule,
        CreateFlowComponent,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatIconModule,
        DragDropModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        StepsComponent,
        CreateWorkflowComponent,
        WorkflowComponent,
        AddworkflowComponent,
        ListworkflowComponent,
        EditComponent
    ],
    providers: [ServiceService], // Ajoutez votre service aux fournisseurs
})
export class OrderModule { }
