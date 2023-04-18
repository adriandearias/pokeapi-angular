import { PokemonModelRaw } from '@core/models/pokemonModelRaw.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeapiRawDataService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonModelRaw[]> {
    const pokemonIds = Array.from({length: 1000}, (_, i) => i + 1);
    const requests = pokemonIds.map(id => this.http.get<PokemonModelRaw>(`${this.apiUrl}${id}`));
    return forkJoin(requests);
  }
}
