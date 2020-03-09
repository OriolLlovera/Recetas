import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { RecipeInterface } from '../../models/recipe';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.css']
})
export class DetailsRecipeComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public recipe: RecipeInterface = {};

  ngOnInit() {
    const idRecipe = this.route.snapshot.params['id'];
    this.getDetails(idRecipe);
  }

  getDetails(idRecipe: string): void {
    this.dataApi.getOneRecipe(idRecipe).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

}
