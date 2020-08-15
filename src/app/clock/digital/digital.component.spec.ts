import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalComponent } from './digital.component';
import {parse, parseISO} from 'date-fns/fp';

describe('DigitalComponent', () => {
  let component: DigitalComponent;
  let fixture: ComponentFixture<DigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('convertToHMS', () => {
    it('works properly', () => {
      const time = parseISO('2020-08-14T04:15:29');
      const result = component.convertToHMS(time);
      expect(result).toEqual([0, 4, 1, 5, 2, 9]);
    });
  });
});
