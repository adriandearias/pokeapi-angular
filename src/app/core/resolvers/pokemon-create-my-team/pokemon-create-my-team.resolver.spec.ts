import { TestBed } from '@angular/core/testing';

import { PokemonCreateMyTeamResolver } from './pokemon-create-my-team.resolver';

describe('PokemonCreateMyTeamResolver', () => {
  let resolver: PokemonCreateMyTeamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonCreateMyTeamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
