import { PokemonModelRaw } from '@core/models/pokemonModelRaw.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeapiRawDataService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonList$ = new BehaviorSubject<PokemonModelRaw[]>([]);

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonModelRaw[]> {
    const pokemonIds = Array.from({length: 151}, (_, i) => i + 1);
    const requests = pokemonIds.map(id => this.http.get<PokemonModelRaw>(`${this.apiUrl}${id}`));
    return forkJoin(requests);
  }

  getPokemonById(id: number): Observable<PokemonModelRaw> {
    return this.http.get<PokemonModelRaw>(`${this.apiUrl}${id}`);
  }
  
  getPokemonList(): Observable<PokemonModelRaw[]> {
    return this.pokemonList$.asObservable();
  }
}
