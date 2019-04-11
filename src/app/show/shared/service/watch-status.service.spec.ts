import { TestBed } from '@angular/core/testing';

import { WatchStatusService } from './watch-status.service';

describe('WatchStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatchStatusService = TestBed.get(WatchStatusService);
    expect(service).toBeTruthy();
  });
});
