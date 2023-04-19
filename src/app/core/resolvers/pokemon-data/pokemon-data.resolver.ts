import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PokemonModelRaw } from '@core/models/pokemonModelRaw.model';
import { take, filter, tap } from 'rxjs/operators';
import { PokeapiRawDataService } from '@core/services/pokeapi-raw-data/pokeapi-raw-data.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataResolver implements Resolve<PokemonModelRaw[]> {
  
  private pokemonData$ = new BehaviorSubject<PokemonModelRaw[]>([]);

  constructor(private router: Router, private pokeapiRawDataService: PokeapiRawDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonModelRaw[]> {
    if (this.pokemonData$.getValue().length) {
      return this.pokemonData$.asObservable().pipe(take(1));
    } else {
      return this.pokeapiRawDataService.getPokemons().pipe(
        filter(pokemonList => pokemonList.length > 0),
        take(1),
        tap(pokemonList => this.pokemonData$.next(pokemonList))
      );
    }
  }
}
