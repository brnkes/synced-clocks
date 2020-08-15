import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DigitalClockComponent} from "./digital-clock.component";
import {parse, parseISO} from 'date-fns/fp';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let fixture: ComponentFixture<DigitalClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('convertToHMS', () => {
    it('works properly', () => {
      // const time = parseISO('2020-08-14T04:15:29');
      const result = component.convertToHMS([4, 15, 29]);
      expect(result).toEqual([0, 4, 1, 5, 2, 9]);
    });
  });
});
