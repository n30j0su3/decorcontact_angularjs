import { TestBed } from '@angular/core/testing';

import { RoturaService } from './rotura.service';

describe('RoturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoturaService = TestBed.get(RoturaService);
    expect(service).toBeTruthy();
  });
});
