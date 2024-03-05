import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { CdkDragStart, CdkDragMove, CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { ManagesComponent } from './manages.component';

describe('ManagesComponent', () => {
  let component: ManagesComponent;
  let fixture: ComponentFixture<ManagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
