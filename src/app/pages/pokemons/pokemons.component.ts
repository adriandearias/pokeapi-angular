import { PokemonModelRaw } from './../../core/models/pokemonModelRaw.model';
import { PokeapiRawDataService } from '@core/services/pokeapi-raw-data/pokeapi-raw-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  public paginatedPokemons: PokemonModelRaw[] = [];
  public isLoading: boolean = false;
  public searchTerm: string = '';
  public currentPage: number = 1;
  public pageSize: number = 25;
  public totalPages: number = 0;
  
  constructor(
    private pokeapiService: PokeapiRawDataService,
    private router: Router,
    private activateRoute: ActivatedRoute 
  ) {}

  public ngOnInit() {
    this.activateRoute.data.subscribe((data) => {
      if (data['pokemonData']) {
        console.log(data['pokemonData'])
        this.paginatedPokemons = data['pokemonData']
      }else{
        this.getPokemons();
      }
    })
  }
    
  getPokemons() {
    this.isLoading = true;
    const offset = (this.currentPage - 1) * this.pageSize;
    this.pokeapiService.getPokemons().subscribe(
      (data: PokemonModelRaw[]) => {
        this.paginatedPokemons = data.slice(offset, offset + this.pageSize);
        this.totalPages = Math.ceil(data.length / this.pageSize);
        console.log(this.totalPages);
        
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
    const offset = (this.currentPage - 1) * this.pageSize;
    this.paginatedPokemons = this.paginatedPokemons.slice(offset, offset + this.pageSize);
  }

  goToPokemonDetail(pokemon: PokemonModelRaw) {
    this.router.navigate(['/pokemon-datail', pokemon.id]);
  }
}
