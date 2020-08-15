import {Component, Inject, OnInit} from '@angular/core';
import {TimeService} from '../../service/time/time.service';
import {getHours, getMinutes, getSeconds, parse, parseISO} from 'date-fns/fp';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  digits$;

  constructor(
    private timeService: TimeService
  ) {
    this.digits$ = timeService.getTime$().pipe(
      map(date => this.convertToHMS(date)),
    );
  }

  ngOnInit(): void {

  }

  convertToHMS([hh, mm, ss]: [number, number, number]): number[] {
    const digits = (val) => [Math.floor(val / 10), val % 10];

    return [
      ...digits(hh),
      ...digits(mm),
      ...digits(ss)
    ];
  }
}
