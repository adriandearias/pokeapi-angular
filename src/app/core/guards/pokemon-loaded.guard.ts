import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeapiRawDataService } from '@core/services/pokeapi-raw-data/pokeapi-raw-data.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonLoadedGuard implements CanActivate {
  
  constructor(private pokeApiService: PokeapiRawDataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.pokeApiService.getPokemons().pipe(
      take(1),
      map(pokemonList => !!pokemonList.length)
    );
  }
}
