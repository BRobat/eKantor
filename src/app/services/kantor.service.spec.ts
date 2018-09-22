import { TestBed, inject } from '@angular/core/testing';

import { KantorService } from './kantor.service';

describe('KantorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KantorService]
    });
  });

  it('should be created', inject([KantorService], (service: KantorService) => {
    expect(service).toBeTruthy();
  }));
});
