import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdjusterComponent} from './adjuster.component';
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

  describe('splitTimeIntoMMHHSS', () => {
    it('works properly', () => {
      const result1 = component.splitTimeIntoMMHHSS('12:38:44');
      expect(result1).toEqual([12, 38, 44]);

      const result2 = component.splitTimeIntoMMHHSS('0:4:9');
      expect(result2).toEqual([0, 4, 9]);
    });
  });
});
