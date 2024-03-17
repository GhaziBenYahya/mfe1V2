import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrderComponent } from './order.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { ListworkflowComponent } from './listworkflow/listworkflow.component';
import { EditComponent } from './edit/edit.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { StepsComponent } from './create-flow/steps/steps.component';
import { CreateWorkflowComponent } from './create-flow/create-workflow/create-workflow.component';
import { StepInfoComponent } from './create-flow/step-info/step-info.component';
import { CreateFlowComponent } from './create-flow/create-flow.component';
import path from 'path';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [


  { path: '', redirectTo: 'orderComponent/workflowComponent', pathMatch: 'full' },
  
   // {path:'',component:OrderComponent},


    {
        path: 'orderComponent',
        component: OrderComponent,
        children:[
          {
            path: 'workflowComponent',
            component: WorkflowComponent
        
          },
          {
            path: 'addworkflowComponent',
            component: AddworkflowComponent
        
          },
          {
            path: 'listworkflowComponent',
            component: ListworkflowComponent
        
          },
          {
            path: 'sidebarComponent',
            component: SidebarComponent
          },
          {
            path: 'headerComponent',
            component: HeaderComponent
          },
          {
            path: 'create-flowComponent',
            component: CreateFlowComponent,
            children:[
              {
                path: 'create-workflowComponent',
                component: CreateWorkflowComponent
            
              },
              {
                path: 'step-infoComponent',
                component: StepInfoComponent
            
              },
              {
                path: 'stepsComponent',
                component: StepsComponent
            
              },

            ]
            
          },
         
          
          
          {
            path: 'editComponent/:workflowId',
            component: EditComponent
        
          },
        ]
    
      },

];

@NgModule({
    imports: [RouterModule.forChild(routes), 
    MatListModule, 
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
