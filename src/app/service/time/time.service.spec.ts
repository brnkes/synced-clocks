import {TestBed} from '@angular/core/testing';

import {TimeService} from './time.service';
import {parseISO} from 'date-fns/fp';
import {skip} from 'rxjs/operators';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);

    // tslint:disable-next-line
    service['getNow'] = () => {
      return parseISO('2020-08-14T04:15:29');
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('handleReadjustment', () => {
    it('returns the correct date', (done) => {
      // todo : maybe a marble test instead ?
      this.basis$.subscribe(
        skip(1)
      ).subscribe(
        basis => {
          expect(basis).toEqual(null);
        }
      );

      service.setNewBasis([3, 52, 26]);
    });
  });
});
