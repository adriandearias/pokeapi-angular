import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModelRaw } from '@core/models/pokemonModelRaw.model';
import { PokeapiRawDataService } from '@core/services/pokeapi-raw-data/pokeapi-raw-data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  public pokemon?: PokemonModelRaw;

  constructor(
    private pokeapiService: PokeapiRawDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id')
    if (pokemonId) {
      this.pokeapiService.getPokemonById(parseInt(pokemonId)).subscribe(
        pokemon => this.pokemon = pokemon
      );
    }
  }
}
