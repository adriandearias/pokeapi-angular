import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '@core/models/pokemonModel.model';
import { PokeapiMappedDataService } from '@core/services/pokeapi-mapped-data/pokeapi-mapped-data.service';

@Component({
  selector: 'app-create-my-team',
  templateUrl: './create-my-team.component.html',
  styleUrls: ['./create-my-team.component.scss']
})
export class CreateMyTeamComponent implements OnInit {
  isLoading: boolean = false;
  pokemonList: PokemonModel[] = [];
  pokemonSelectionList: PokemonModel[] = [];
  originalPokemonList: PokemonModel[] = [];
  selectedPokemonIds: number[] = []; 
  searchTerm: string = '';

  constructor(private pokeapiMappedDataService: PokeapiMappedDataService) { }

  ngOnInit(): void {
    this.getPokemonData();
  }

  async getPokemonData() {
    try {
      this.isLoading = true;
      const pokemonData = await this.pokeapiMappedDataService.getPokemonData();
      this.pokemonSelectionList = pokemonData;
      this.originalPokemonList = pokemonData; 
    } catch (error) {
      console.error('Error obteniendo datos de Pokémon:', error);
    } finally {
      this.isLoading = false;
    }
  }

  addToTeam(pokemon: PokemonModel): void {
    if (this.pokemonList.length < 6 && !this.isPokemonSelected(pokemon)) {
      this.pokemonList.push(pokemon);
      this.selectedPokemonIds.push(pokemon.id);
    }
  }

  removeFromTeam(pokemon: PokemonModel): void {
    this.pokemonList = this.pokemonList.filter(p => p.id !== pokemon.id);
    this.selectedPokemonIds = this.selectedPokemonIds.filter(id => id !== pokemon.id);
  }

  removeAllFromTeam(): void {
    this.pokemonList = [];
    this.selectedPokemonIds = [];
  }

  isPokemonSelected(pokemon: PokemonModel): boolean {
    return this.selectedPokemonIds.includes(pokemon.id); 
  }

  onSearchTermChange(event: any): void {
    this.searchTerm = event.target.value;
    if (this.searchTerm === '') {
      this.pokemonSelectionList = this.originalPokemonList;
    } else {
      this.pokemonSelectionList = this.originalPokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
