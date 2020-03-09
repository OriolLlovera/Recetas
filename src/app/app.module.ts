import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './components/admin/list-recipes/list-recipes.component';
import { DetailsRecipeComponent } from './components/details-recipe/details-recipe.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevasRecetasComponent } from './components/nuevasrecetas/nuevasrecetas.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FilterPipe } from './pipes/filter.pipe';
//import { FavouritesComponent } from './components/favourites/favourites.component';

//ngx pagination
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    DetailsRecipeComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    NuevasRecetasComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    FilterPipe
   // FavouritesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgxPaginationModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
