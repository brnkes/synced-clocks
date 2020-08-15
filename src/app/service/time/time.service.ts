import { Injectable } from '@angular/core';
import {getHours, getMinutes, getSeconds} from 'date-fns';
import {interval, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time$;

  constructor() {
    const now = this.getNow().getTime();

    this.time$ = interval(1000).pipe(
      map(secondsElapsed => {
        const timestamp = now + secondsElapsed * 1000;
        const currentTime = new Date(timestamp);

        return currentTime;
      }),
    );
  }

  getTime$(): Observable<Date> {
    return this.time$;
  }

  private getNow(): Date {
    return new Date();
  }
}
