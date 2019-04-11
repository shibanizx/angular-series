import { TestBed } from '@angular/core/testing';

import { OnlineChannelService } from './online-channel.service';

describe('OnlineChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineChannelService = TestBed.get(OnlineChannelService);
    expect(service).toBeTruthy();
  });
});
