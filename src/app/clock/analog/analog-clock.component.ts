import { Component, OnInit } from '@angular/core';
import {TimeService} from '../../service/time/time.service';
import {getHours, getMinutes, getSeconds} from 'date-fns/fp';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  angles$;

  constructor(
    private timeService: TimeService
  ) {
    this.angles$ = timeService.getTime$().pipe(
      map(date => this.convertToAngles(date)),
    );
  }

  ngOnInit(): void {
  }

  convertToAngles([hh, mm, ss]: [number, number, number]): number[] {
    Math.floor(hh / 10);

    return [
      360 * (hh % 12) / 12,
      360 * (mm / 60),
      360 * (ss / 60),
    ];
  }

  getTransformation(degs): any {
    const transformation = `translate(10rem,10rem) rotate(${degs - 90}deg)`;
    return {
      transform : transformation
    };
  }
}
