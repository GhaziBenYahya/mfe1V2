import { Component } from '@angular/core';
import { StepInfoComponent} from '../create-flow/step-info/step-info.component';
import { StepsComponent} from '../create-flow/steps/steps.component';
import { CreateWorkflowComponent} from '../create-flow/create-workflow/create-workflow.component';

@Component({
  selector: 'app-create-flow',
  standalone: true,
  imports: [StepInfoComponent, StepsComponent, CreateWorkflowComponent],
  templateUrl: './create-flow.component.html',
  styleUrl: './create-flow.component.css'
})
export class CreateFlowComponent {


}
