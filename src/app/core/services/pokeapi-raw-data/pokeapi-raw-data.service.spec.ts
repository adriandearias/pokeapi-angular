import { TestBed } from '@angular/core/testing';

import { PokeapiRawDataService } from './pokeapi-raw-data.service';

describe('PokeapiRawDataService', () => {
  let service: PokeapiRawDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiRawDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
