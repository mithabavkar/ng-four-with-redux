import { TestBed, inject } from '@angular/core/testing';

import { GlobalSharedServiceService } from './global-shared-service.service';

describe('GlobalSharedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalSharedServiceService]
    });
  });

  it('should be created', inject([GlobalSharedServiceService], (service: GlobalSharedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
