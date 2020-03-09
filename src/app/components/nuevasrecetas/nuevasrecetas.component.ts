import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { RecipeInterface } from 'src/app/models/recipe';

@Component({
  selector: 'app-nuevasrecetas',
  templateUrl: './nuevasrecetas.component.html',
  styleUrls: ['./nuevasrecetas.component.css']
})
export class NuevasRecetasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public recipes: RecipeInterface[];
  ngOnInit() {
    this.getNewRecipes();
    console.log('Novedades', this.recipes);
  }


  getNewRecipes() {
    this.dataApi.getAllNewRecipes().subscribe(nuevasrecetas => this.recipes = nuevasrecetas);
  }

}
