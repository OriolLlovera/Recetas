import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevasRecetasComponent } from 'src/app/components/nuevasrecetas/nuevasrecetas.component';
//import { FavouritesComponent } from './components/favourites/favourites.component';
import { DetailsRecipeComponent } from './components/details-recipe/details-recipe.component';
import { ListRecipesComponent } from './components/admin/list-recipes/list-recipes.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ProfileComponent } from 'src/app/components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevasrecetas', component: NuevasRecetasComponent, canActivate: [AuthGuard] },
 // { path: 'recetasfavoritas', component: FavouritesComponent, canActivate: [AuthGuard] },
  { path: 'recipe/:id', component: DetailsRecipeComponent },
  { path: 'admin/list-recipes', component: ListRecipesComponent, canActivate: [AuthGuard] },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
