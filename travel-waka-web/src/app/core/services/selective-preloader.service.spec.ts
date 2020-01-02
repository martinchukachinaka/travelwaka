import { TestBed } from '@angular/core/testing';

import { SelectivePreloaderService } from './selective-preloader.service';

describe('SelectivePreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectivePreloaderService = TestBed.get(
      SelectivePreloaderService
    );
    expect(service).toBeTruthy();
  });
});
