import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// app.module.ts
import { CreateWorkflowComponent } from '../create-workflow/create-workflow.component';


@NgModule({
  declarations: [  
    CreateWorkflowComponent,

  ],
  imports: [
    CommonModule,
  ],
  providers: [], // Ajoutez votre service aux fournisseurs
})
export class StepsModule { }
