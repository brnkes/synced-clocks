import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.scss']
})
export class AdjusterComponent implements OnInit {
  @Input()
  clockType: 'Analog' | 'Digital';

  constructor() { }

  ngOnInit(): void {

  }
}
