import { TestBed } from '@angular/core/testing';

import { MatchPairsGameService } from './match-pairs-game.service';

describe('MatchPairsGameService', () => {
  let service: MatchPairsGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchPairsGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
