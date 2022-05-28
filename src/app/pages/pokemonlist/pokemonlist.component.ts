import { IPokemon } from './../../core/services/models/pokemon-models';
import { PokemonService } from './../../core/services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

  public pokemon: any[] = [];

  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getPokemon()
      .subscribe((res:any) => {
        res.results.forEach((result:any) =>{
          this.PokemonService.getDetails(result.name).subscribe((resp:any) => {
            this.pokemon?.push(resp);
            console.log(this.pokemon)
          })
        })
      })
    
  }

  

}
