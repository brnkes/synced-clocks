import {Injectable} from '@angular/core';
import {getHours, getMinutes, getSeconds} from 'date-fns';
import {Observable, ReplaySubject, Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {setHours, setMinutes, setSeconds} from 'date-fns/fp';
import {compose} from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time$;
  basis$: Subject<number>;

  constructor() {
    this.basis$ = new ReplaySubject<number>();
    this.basis$.next(this.getNow().getTime());

    this.time$ = this.basis$.pipe(
      switchMap(
        basis =>
          timer(0, 1000).pipe(
            startWith(0),
            map(secondsElapsed => {
              const timestamp = basis + secondsElapsed * 1000;
              const currentTime = new Date(timestamp);

              const hh = getHours(currentTime);
              const mm = getMinutes(currentTime);
              const ss = getSeconds(currentTime);

              return [hh, mm, ss];
            }),
          )
      )
    );
  }

  getTime$(): Observable<[number, number, number]> {
    return this.time$;
  }

  setNewBasis([hh, mm, ss]: [number, number, number]): void {
    const time = compose(
      (finalDate) => finalDate.getTime(),
      setHours(hh),
      setMinutes(mm),
      setSeconds(ss),
    )(this.getNow());

    this.basis$.next(time);
  }

  private getNow(): Date {
    return new Date();
  }
}
