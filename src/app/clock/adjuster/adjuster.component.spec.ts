import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjusterComponent } from './adjuster.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AdjusterComponent', () => {
  let component: AdjusterComponent;
  let fixture: ComponentFixture<AdjusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjusterComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
