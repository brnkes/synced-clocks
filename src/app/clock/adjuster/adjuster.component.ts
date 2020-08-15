import {Component, Input, OnInit} from '@angular/core';
import {TimeService} from '../../service/time/time.service';

@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.scss']
})
export class AdjusterComponent implements OnInit {
  @Input()
  clockType: 'Analog' | 'Digital';

  isAdjusting = false;

  constructor(
    private timeService: TimeService,
  ) { }

  ngOnInit(): void {

  }
}
