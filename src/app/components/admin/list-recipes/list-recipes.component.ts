import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { RecipeInterface } from '../../../models/recipe';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  public recipes: RecipeInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  //NOU
  public users: UserInterface[];

  ngOnInit() {
    this.getListRecipes();
    this.getCurrentUser();
    this.getListUsers();
  }

  //lista usuarios
  
  getListUsers() {
    this.dataApi.getAllUsers()
      .subscribe(users => {
        this.users = users;
      });
  }  

  
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }
  getListRecipes() {
    this.dataApi.getAllRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }

  onDeleteRecipe(idRecipe: string): void {
    const confirmacion = confirm('Estas Segur@?');
    if (confirmacion) {
      this.dataApi.deleteRecipe(idRecipe);
    }
  }

  onPreUpdateRecipe(recipe: RecipeInterface) {
    console.log('Recipe', recipe);
    this.dataApi.selectedRecipe = Object.assign({}, recipe);
  } 

}
