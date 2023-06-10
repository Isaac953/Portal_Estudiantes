import { TestBed } from '@angular/core/testing';

import { LoadLoginService } from './load-login.service';

describe('LoadLoginService', () => {
  let service: LoadLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
