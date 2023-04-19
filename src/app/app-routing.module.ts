import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLoadedGuard } from '@core/guards/pokemon-loaded.guard';
import { PokemonDataResolver } from '@core/resolvers/pokemon-data/pokemon-data.resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'create-my-team',
    loadChildren: () => import('./pages/create-my-team/create-my-team.module').then(m => m.CreateMyTeamModule)
  },
  {
    path: 'pokemon-detail/:id',
    loadChildren: () => import('./pages/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule)
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./pages/pokemons/pokemons.module').then(m => m.PokemonsModule),
    resolve: {
      pokemonData: PokemonDataResolver
    },
    canActivate: [PokemonLoadedGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
