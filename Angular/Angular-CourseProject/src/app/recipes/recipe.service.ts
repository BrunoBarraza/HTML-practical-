import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.cookipedia.co.uk/wiki/images/4/40/Sourdough_bread_pizza_recipe.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.cookipedia.co.uk/wiki/images/4/40/Sourdough_bread_pizza_recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //Slice makes a copy of the array to access outside the service but doesn't change it here.
  }
}
