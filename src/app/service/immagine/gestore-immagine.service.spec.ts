import { TestBed } from '@angular/core/testing';

import { GestoreImmagineService } from './gestore-immagine.service';

describe('GestoreImmagineService', () => {
  let service: GestoreImmagineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestoreImmagineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
