import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../service/time/time.service';
import {BehaviorSubject, Subject} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, tap, withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.scss']
})
export class AdjusterComponent implements OnInit {
  isAdjusting = false;
  timeSnapshot$: Subject<boolean>;
  lastSeenTime$;

  adjusterFormGroup: FormGroup;

  constructor(
    private timeService: TimeService,
    private formBuilder: FormBuilder
  ) {
    this.adjusterFormGroup = this.formBuilder.group({
      lastSeenTime: new FormControl({value: undefined})
    });

    this.timeSnapshot$ = new BehaviorSubject(true);

    this.lastSeenTime$ = this.timeSnapshot$.pipe(
      withLatestFrom(timeService.getTime$()),
      map(([ignore, time]) => time.join(':')),
      tap(lastSeenTime => this.adjusterFormGroup.patchValue({ lastSeenTime }))
    );
  }

  ngOnInit(): void {
  }

  applyAdjustment(): void {
    const newTime = this.adjusterFormGroup.get('lastSeenTime').value;
    const [hh, mm, ss] = this.splitTimeIntoMMHHSS(newTime);

    this.timeService.setNewBasis([hh, mm, ss]);
    this.timeSnapshot$.next(true);

    this.isAdjusting = false;
  }

  shouldAdjust(): void {
    this.isAdjusting = true;
  }

  splitTimeIntoMMHHSS(newTime: string): number[] {
    return newTime.split(':').map(digits => parseInt(digits, 10));
  }
}
