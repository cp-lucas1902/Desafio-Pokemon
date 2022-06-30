import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonMo } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers:[ PokemonService]
})
@Input()
export class FavoritosComponent implements OnInit {


  public pokemon: Array<PokemonMo> = []
  public pokemons: PokemonMo[] = []

  constructor(private router: Router,private pokemonService:PokemonService) { 
   
  }

  ngOnInit(): void {
   
  }

}
