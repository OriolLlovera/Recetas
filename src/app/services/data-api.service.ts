import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { RecipeInterface } from '../models/recipe';
//nou
import { UserInterface } from '../models/user';
//nou
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
//nou
import { BookRecipeInterface } from '../models/bookrecipe';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { }
  private recipesCollection: AngularFirestoreCollection<RecipeInterface>;
  private recipes: Observable<RecipeInterface[]>;
  private recipeDoc: AngularFirestoreDocument<RecipeInterface>;
  private recipe: Observable<RecipeInterface>;
  /**
   * NOU
   */
  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;
  private userDoc: AngularFirestoreDocument<UserInterface>;
  private user: Observable<UserInterface>;

//FAV
private bookrecipesCollection: AngularFirestoreCollection<BookRecipeInterface>;
private bookrecipes: Observable<BookRecipeInterface[]>;
private bookrecipeDoc: AngularFirestoreDocument<BookRecipeInterface>;
private bookrecipe: Observable<BookRecipeInterface>;

   /**NOU */
  public selectedRecipe: RecipeInterface = {
    id: null
  };

  getAllRecipes() {
    this.recipesCollection = this.afs.collection<RecipeInterface>('recipes');
    return this.recipes = this.recipesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as RecipeInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  //tots els usuaris
  getAllUsers() {
    this.usersCollection = this.afs.collection<UserInterface>('users');
    return this.users = this.usersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UserInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }



  getAllNewRecipes() {
    this.recipesCollection = this.afs.collection('recipes', ref => ref.where('nuevo', '==', '1'));
    return this.recipes = this.recipesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as RecipeInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneRecipe(idRecipe: string) {
    this.recipeDoc = this.afs.doc<RecipeInterface>(`recipes/${idRecipe}`);
    return this.recipe = this.recipeDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as RecipeInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addRecipe(recipe: RecipeInterface): void {
    this.recipesCollection.add(recipe);
  }
  updateRecipe(recipe: RecipeInterface): void {
    let idRecipe = recipe.id;
    this.recipeDoc = this.afs.doc<RecipeInterface>(`recipes/${idRecipe}`);
    this.recipeDoc.update(recipe);
  }
  deleteRecipe(idRecipe: string): void {
    this.recipeDoc = this.afs.doc<RecipeInterface>(`recipes/${idRecipe}`);
    this.recipeDoc.delete();
  }
}
