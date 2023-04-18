import { PokemonModelRaw } from '../../core/models/pokemonModelRaw.model';
import { PokeapiRawDataService } from '@core/services/pokeapi-raw-data/pokeapi-raw-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  public pokemons: PokemonModelRaw[] = [];
  public paginatedPokemons: PokemonModelRaw[] = [];
  public isLoading: boolean = false;
  public searchTerm: string = '';
  public currentPage: number = 1;
  public pageSize: number = 25;
  public totalPages: number = 0;
  
  constructor(private pokeapiService: PokeapiRawDataService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.isLoading = true;
    
    this.pokeapiService.getPokemons().subscribe(
      (data: PokemonModelRaw[]) => {
        this.pokemons = data;
        this.totalPages = Math.ceil(this.pokemons.length / this.pageSize);
        this.paginatedPokemons = this.pokemons.slice(0, this.pageSize);
        this.isLoading = false;
      },
      (error: string) => {
        console.error('Error al obtener los Pokémon:', error);
        this.isLoading = false;
      }
    );
  }

  onInputChange(value: string) {
    this.searchTerm = value;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPokemons();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPokemons();
    }
  }

  updatePaginatedPokemons() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPokemons = this.pokemons.slice(startIndex, endIndex);
  }
}
