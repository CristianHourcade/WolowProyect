import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { APIListDataService } from './api-list-data.service';

describe('APIListDataService', () => {
  let service: APIListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [APIListDataService]
    });
    service = TestBed.inject(APIListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
