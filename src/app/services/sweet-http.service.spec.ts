import { TestBed, inject } from '@angular/core/testing';

import { SweetHttpService } from './sweet-http.service';

describe('SweetHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetHttpService]
    });
  });

  it('should be created', inject([SweetHttpService], (service: SweetHttpService) => {
    expect(service).toBeTruthy();
  }));
});
