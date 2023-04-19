import { TestBed } from '@angular/core/testing';

import { PokemonLoadedGuard } from './pokemon-loaded.guard';

describe('PokemonLoadedGuard', () => {
  let guard: PokemonLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PokemonLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
