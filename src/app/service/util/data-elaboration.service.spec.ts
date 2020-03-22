import { TestBed } from '@angular/core/testing';

import { DataElaborationService } from './json-typings';

describe('DataElaborationService', () => {
  let service: DataElaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataElaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
