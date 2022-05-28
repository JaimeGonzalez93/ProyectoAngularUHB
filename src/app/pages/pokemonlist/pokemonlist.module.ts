import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonlistRoutingModule } from './pokemonlist-routing.module';
import { PokemonlistComponent } from './pokemonlist.component';


@NgModule({
  declarations: [
    PokemonlistComponent
  ],
  imports: [
    CommonModule,
    PokemonlistRoutingModule
  ],
  exports:[
    PokemonlistComponent
  ]
})
export class PokemonlistModule { }
