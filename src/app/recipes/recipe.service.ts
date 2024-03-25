import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Baklava','Honey Baklava - Super Yummy!','https://www.modernhoney.com/wp-content/uploads/2023/03/Baklava-8-crop-scaled.jpg', 
        [new Ingredient('Phyllo Dough',1), new Ingredient('Nuts',3), new Ingredient('Butter',1), new Ingredient('Cinnamon',1), new Ingredient('Honey Syrup',2)])
        ,new Recipe('Birria Quesa Tacos','Tasty Tacos','https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-quesabirria-tacos-recipe.jpg',
        [new Ingredient('Torillas',4), new Ingredient('Cheddar Cheese',4), new Ingredient('Oreganos',1), new Ingredient('Beef Broth',1), new Ingredient('Goat Stew Meat',2)])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
        // In Javascript, arrays are passed as reference, so any change in the passing array, will
        // also change the array in this service. Hence, slice() is used which sends a copy.
    }
    addRecipe(){

    }

    editRecipe(){

    }

    deleteRecipe(){

    }

    onAddIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}