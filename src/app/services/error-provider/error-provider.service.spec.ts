import { TestBed } from '@angular/core/testing';

import { ErrorProviderService } from './error-provider.service';

describe('ErrorProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorProviderService = TestBed.get(ErrorProviderService);
    expect(service).toBeTruthy();
  });
});
