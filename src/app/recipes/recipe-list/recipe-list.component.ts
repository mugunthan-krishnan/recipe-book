import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','A test recipe','https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute- \
    recipe-card-xDHAiGpfgKU.jpg')
    ,new Recipe('Test Recipe','A test recipe','https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute- \
    recipe-card-xDHAiGpfgKU.jpg')
  ];

  constructor(){

  }
}
