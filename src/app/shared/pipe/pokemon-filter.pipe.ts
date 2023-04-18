import { Pipe, PipeTransform } from '@angular/core';
import { PokemonModel } from '@core/models/pokemonModel.model';



@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {
  transform(pokemons: PokemonModel[], searchTerm: string): PokemonModel[] {
    if (!searchTerm) {
      return pokemons;
    }

    searchTerm = searchTerm.toLowerCase();

    return pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchTerm);
    });
  }
}
