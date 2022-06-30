import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PainelComponent } from './painel/painel.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritosComponent } from './favoritos/favoritos.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    PainelComponent,
    PokemonsComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
