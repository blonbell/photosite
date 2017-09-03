import { TestBed, inject } from '@angular/core/testing';

import { UserBundleService } from './user-bundle.service';

describe('UserBundleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBundleService]
    });
  });

  it('should be created', inject([UserBundleService], (service: UserBundleService) => {
    expect(service).toBeTruthy();
  }));
});
