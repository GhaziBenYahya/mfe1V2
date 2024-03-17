import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-workflow',
  standalone: true,
  imports: [],
  templateUrl: './create-workflow.component.html',
  styleUrl: './create-workflow.component.css'
})
export class CreateWorkflowComponent {
  constructor(
    private router: Router
  ) { }
  // onDrop(event: CdkDragDrop<string[]>) {
  //       if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  showStepInfo: boolean = false;


  createRule() :void {
    // this.dialog.open(AddRuleComponent, {
    // })
    this.router.navigate(['/mfe-rule'])
  }
  
isStepInfoVisible() {
  return this.showStepInfo;
}

ShowStepInfoClick(): void {
  this.showStepInfo = true;
}

}
