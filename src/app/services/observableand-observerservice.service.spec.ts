import { TestBed } from '@angular/core/testing';

import { ObservableandObserverserviceService } from './observableand-observerservice.service';

describe('ObservableandObserverserviceService', () => {
  let service: ObservableandObserverserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableandObserverserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
