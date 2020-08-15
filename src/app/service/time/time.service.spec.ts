import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';
import { parse } from 'date-fns/fp';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);

    // tslint:disable-next-line
    service['getNow'] = () => {
      return (parse as any)('14/08/2020 22:11:33', 'MM/dd/yyyy kk:mm:ss', new Date());
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
