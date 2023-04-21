import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { PokemonModelRaw } from '@core/models/pokemonModelRaw.model';
import { PokeapiRawDataService } from '@core/services/pokeapi-raw-data/pokeapi-raw-data.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataResolver implements Resolve<PokemonModelRaw[]> {
  // private pokemonData$ = new BehaviorSubject<PokemonModelRaw[]>([]);
  constructor(private pokeapiRawDataService: PokeapiRawDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonModelRaw[]> {
    console.log(this.pokeapiRawDataService.getPokemons());
    return this.pokeapiRawDataService.getPokemons()
}}
