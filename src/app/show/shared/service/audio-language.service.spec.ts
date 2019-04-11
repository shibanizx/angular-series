import { TestBed } from '@angular/core/testing';

import { AudioLanguageService } from './audio-language.service';

describe('AudioLanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioLanguageService = TestBed.get(AudioLanguageService);
    expect(service).toBeTruthy();
  });
});
