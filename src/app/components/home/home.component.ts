import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public recipes = [];
  public recipe = '';
  filterPost = '';
  pageActual: number = 1;

  ngOnInit() {
    this.dataApi.getAllRecipes().subscribe(recipes => {
      console.log('Recipes', recipes);
      this.recipes = recipes;
    })
 
  }

    


}