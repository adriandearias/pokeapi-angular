import { TestBed } from '@angular/core/testing';

import { PokeapiMappedDataService } from './pokeapi-mapped-data.service';

describe('PokeapiMappedDataService', () => {
  let service: PokeapiMappedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiMappedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
