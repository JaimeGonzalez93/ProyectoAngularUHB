import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", pathMatch:'full', loadChildren:() => import(`src/app/pages/home/home.module`).then (m => m.HomeModule)
  },
  {
    path:"home", loadChildren:() => import (`src/app/pages/home/home.module`).then(m => m.HomeModule)
  },
  {
    path:"pokemon", loadChildren:() => import (`src/app/pages/pokemonlist/pokemonlist.module`).then(m=>m.PokemonlistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
