import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiLoginService } from './api-login.service';

describe('ApiLoginService', () => {
  let service: ApiLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiLoginService]
    });
    service = TestBed.inject(ApiLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
