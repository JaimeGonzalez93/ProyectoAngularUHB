import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", redirectTo:"home", pathMatch:"full"
  },
  {
    path:"home", loadChildren:() => import (`src/app/pages/home/home.module`).then(m => m.HomeModule)
  },
  {
    path:"pokemon", loadChildren:() => import (`src/app/pages/pokemonlist/pokemonlist.module`).then(m=>m.PokemonlistModule)
  },
  {
    path:"userAccount", loadChildren:() => import (`src/app/pages/user-account/user-account.module`).then(m=>m.UserAccountModule),
    canActivate: [AuthGuard]
  },
  {
    path:"register", loadChildren:() => import (`src/app/pages/register/register.module`). then(m=>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
