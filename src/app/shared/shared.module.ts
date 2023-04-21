import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PokemonFilterPipe } from './pipe/pokemon-filter.pipe';
import { PokemonDetailComponent } from '../pages/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from '../pages/pokemons/pokemons.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PokemonFilterPipe,
    PokemonDetailComponent,
    PokemonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
   FooterComponent,
   HeaderComponent,
   PokemonFilterPipe,
   PokemonDetailComponent,
   PokemonsComponent,
  ]
})
export class SharedModule { }
