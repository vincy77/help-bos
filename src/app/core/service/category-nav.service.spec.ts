import { TestBed, inject } from '@angular/core/testing';

import { CategoryNavService } from './category-nav.service';

describe('CategoryNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryNavService]
    });
  });

  it('should be created', inject([CategoryNavService], (service: CategoryNavService) => {
    expect(service).toBeTruthy();
  }));
});
