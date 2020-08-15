import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import { filter, map } from 'rxjs/operators';

type SegmentId = 't' | 'ul' | 'ur' | 'm' | 'll' | 'lr' | 'b';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {
  @Input()
  set digitToDisplay(digit: number) {
    this.activatedSegments = this.digitMap[digit] || [];
  }

  private activatedSegments = [];
  private readonly digitMap: { [digit: number]: SegmentId[] } = {
    0: ['t', 'b', 'ul', 'ur', 'll', 'lr'],
    1: ['ur', 'lr'],
    2: ['t', 'b', 'ur', 'll', 'm'],
    3: ['t', 'b', 'ur', 'lr', 'm'],
    4: ['ul', 'ur', 'lr', 'm'],
    5: ['t', 'b', 'ul', 'lr', 'm'],
    6: ['t', 'b', 'ul', 'll', 'lr', 'm'],
    7: ['t', 'ur', 'lr'],
    8: ['t', 'b', 'ul', 'ur', 'll', 'lr', 'm'],
    9: ['t', 'b', 'ul', 'ur', 'lr', 'm'],
  };

  constructor() { }

  ngOnInit(): void {

  }

  isLit(segmentId: SegmentId): boolean {
    return this.activatedSegments.indexOf(segmentId) >= 0;
  }
}
