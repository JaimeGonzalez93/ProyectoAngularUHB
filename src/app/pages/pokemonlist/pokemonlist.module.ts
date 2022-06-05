import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonlistRoutingModule } from './pokemonlist-routing.module';
import { PokemonlistComponent } from './pokemonlist.component';


@NgModule({
  declarations: [
    PokemonlistComponent,
    
  ],
  imports: [
    CommonModule,
    PokemonlistRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    PokemonlistComponent
  ]
})
export class PokemonlistModule { }
