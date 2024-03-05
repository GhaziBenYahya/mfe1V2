import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDragMove, CdkDragStart, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-manages',
  templateUrl: './manages.component.html',
  styleUrls: ['./manages.component.css']
})
export class ManagesComponent {

  _currentIndex!: number;
  _currentField: any;

  steps = [
    { id: 1, name: 'Start' },
    { id: 2, name: 'Step1' },
    { id: 3, name: 'Step2' },
    { id: 4, name: 'Step3' },
    { id: 5, name: 'Step4' },
    { id: 6, name: 'Step5' },
    { id: 7, name: 'Exit' }
    
  ];

  workflow: any[] = []; 
  draggedStep: any = null; 
  showTaskList: boolean = false;

  toggleTaskList(): void {
    this.onAddNode;
    this.showTaskList = !this.showTaskList;
  }
  onStepDragStarted(event: CdkDragStart, step: any): void {
    this.draggedStep = { ...step };
  }

  onAddNode(): void {
    // Ajoutez un nouveau noeud
    this.showTaskList = !this.showTaskList;

    //const newNode = { id: this.steps.length + 1, name: 'Nouveau noeud' };
    //this.steps.push(newNode);
  }
  
  dragStart(event: CdkDragStart) {
    this._currentIndex = this.steps.indexOf(event.source.data); // Get index of dragged type
    //this._currentField = this.child.nativeElement.children[this._currentIndex]; // Store HTML field
  }

  moved(event: CdkDragMove) {
    // Check if stored HTML field is as same as current field
   // if (this.child.nativeElement.children[this._currentIndex] !== this._currentField) {
      // Replace current field, basically replaces placeholder with old HTML content
     // this.child.nativeElement.replaceChild(this._currentField, this.child.nativeElement.children[this._currentIndex]);
    }
  

  onStepDragEnded(): void {
    // Réinitialisez l'élément en cours de déplacement
    this.draggedStep = null;
  }

  onStepDropped(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer !== event.container) {
      // Ajoutez une copie de l'élément enregistré au workflow
      const copy = { ...this.draggedStep };
      this.workflow.push(copy);
    }
  }

  itemDropped(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
    } else {
      this.addField(event.item.data, event.currentIndex);
    }
  }

  addField(steps: any, index: number) {
    this.steps.splice(index, 0, steps)
  }
}
