import { TestBed } from '@angular/core/testing';

import { AsignatureService } from './asignature.service';

describe('AsignatureService', () => {
  let service: AsignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
