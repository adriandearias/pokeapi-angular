import { Injectable } from '@angular/core';
import { PokemonModel } from '@core/models/pokemonModel.model';
import { map } from 'rxjs/operators';
import { PokeapiRawDataService } from '../pokeapi-raw-data/pokeapi-raw-data.service';

@Injectable({
  providedIn: 'root'
})
export class PokeapiMappedDataService {

  constructor(private pokeapiRawDataService: PokeapiRawDataService) { }

  getPokemonData(): Promise<PokemonModel[]> {
    return new Promise((resolve) => {
      this.pokeapiRawDataService.getPokemons().subscribe((pokemonRawData) => {
        const pokemonData: PokemonModel[] = pokemonRawData.map((rawData) => {
          const id = rawData.id;
          const name = rawData.name;
          const type = rawData.types[0]?.type.name || '';
          const imageUrl = rawData.sprites?.front_default || '';
          const abilities = rawData.abilities.map((ability) => ability.ability.name);
          return new PokemonModel(id, name, type, imageUrl, abilities);
        });
        resolve(pokemonData);
      });
    });
  }
}
