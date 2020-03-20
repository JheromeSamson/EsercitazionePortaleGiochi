import { TestBed } from '@angular/core/testing';

import { DetailToServiceService } from './detail-to-service.service';

describe('DetailToServiceService', () => {
  let service: DetailToServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailToServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
