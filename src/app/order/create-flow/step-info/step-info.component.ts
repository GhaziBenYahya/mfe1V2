import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { CreateFlowComponent } from '../create-flow.component';

@Component({
  selector: 'app-step-info',
  standalone: true,
  imports: [], // No imports are necessary in this component
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.css'
})
export class StepInfoComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }



createRule() :void {
      // this.dialog.open(AddRuleComponent, {
      // })
      this.router.navigate(['/mfe-rule'])
    }
  // public PopUp: any;

  // async createRule() {
  //   // Import the component dynamically if needed (assuming it's not part of this module)
  //   const module = await import ('../create-flow.component'); // Replace with the correct path
  //   this.PopUp = module.CreateFlowComponent;

  //   // Define the custom element (only if necessary)
  //   if (!customElements.get('PopUpComponent')) {
  //     customElements.define('PopUpComponent',  this.PopUp);
  //   }

  //   // Create a popup element instance
  //   const popupElement = document.createElement('PopUpComponent');

  //   // Append the popup element to a container (consider using a specific container instead of body)
  //   const container = document.getElementById('popup-container'); // Assuming you have a container element
  //   if (container) {
  //     container.appendChild(popupElement);
  //   } else {
  //     console.error('Popup container element not found');
  //   }
  // }



}