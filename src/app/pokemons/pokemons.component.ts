import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PokemonMo } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [ PokemonService ]
})
export class PokemonsComponent implements OnInit {
  faStar = faStar;
  pokemons: Array<PokemonMo> = []
  pokemon = {} as PokemonMo;


  constructor(
    private pokemonService:PokemonService,
    private router: Router,  
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonService.getPokemon().subscribe((pokemons: PokemonMo[]) => {
      this.pokemons = pokemons;
      //console.log(this.pokemons) 
    });
  }

  
   
  }
  

