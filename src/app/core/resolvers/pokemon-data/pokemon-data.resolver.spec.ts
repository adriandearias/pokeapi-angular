import { TestBed } from '@angular/core/testing';

import { PokemonDataResolver } from './pokemon-data.resolver';

describe('PokemonDataResolver', () => {
  let resolver: PokemonDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
