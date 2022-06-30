import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'favorito', component: FavoritosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
