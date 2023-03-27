import { TestBed } from '@angular/core/testing';

import { PriorityserviceService } from './priorityservice.service';

describe('PriorityserviceService', () => {
  let service: PriorityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriorityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
