/* eslint-disable vars-on-top */
const config = require("../../../config/config.js");

console.log(
  "https://api.spoonacular.com/recipes/findByIngredients?ingredients=pears,+flour,+salt&number=10&apiKey=" +
    config.MY_KEY
);

function getRecipe(itemOne, itemTwo, itemThree) {
  //Here's the query URL. Locally you'll need your own spoonacular API key.
  //This request pulls ten recipes, you probably don't need that many...
  const recipe = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${itemOne},+${itemTwo},+${itemThree}&number=10&apiKey=${config.MY_KEY}`;

  //Here's the API request
  $.ajax({
    url: recipe,
    method: "GET"
  }).then(response => {
    console.log(response);

    //This is the recipe id number in the spoonacular database; important to grab for
    //database purposes
    const recipeId = response[0].id;

    //This is the recipe name. Important to grab for display and database purposes.
    const recipeTitle = response[0].title;

    //This is the recipe image url.
    const recipeImage = response[0].image;

    //The first of however many ingredients; this pulls all ingredient info.
    //var ingredientOneName = response[0].usedIngredients[0];

    //This pulls the name of the first ingredient.
    const ingredientOneName = response[0].usedIngredients[0].name;

    //This pulls the amount of the first ingredient (just a number).
    const ingredientOneAmount = response[0].usedIngredients[0].amount;

    //This pulls the units to go with the amount of the first ingredient.
    const ingredientOneAmountUnits = response[0].usedIngredients[0].unit;

    //This pulls the original recipe description of this particular ingredient.
    const ingredientOneOriginal = response[0].usedIngredients[0].original;

    //This pulls the image URL for this ingredient (it looks like they all
    //have one, but sometimes they're only tangentially related--a pear image
    //for pear brandy, for example)
    const ingredientOneImageURL = response[0].usedIngredients[0].image;

    console.log(
      `Recipe ID: ${recipeId}. Recipe Title: ${recipeTitle}. Recipe Image URL: ${recipeImage}. First Ingredient Name: ${ingredientOneName}. Amount: ${ingredientOneAmount} ${ingredientOneAmountUnits}. Full First Ingredient Description: ${ingredientOneOriginal}. Ingredient Image: ${ingredientOneImageURL}.`
    );

    fullRecipe(response[0].id);
  });
}

function fullRecipe(num) {
  const fullerRecipe = `https://api.spoonacular.com/recipes/${num}/information&apiKey=${config.MY_KEY}`;
  $.ajax({
    url: fullerRecipe,
    method: "GET"
  }).then(response => {
    console.log(response);

    //Might be nice to display information on whether it is vegetarian or not.
    const isVegetarian = response.vegetarian;

    //Might be nice to display information on whether it is vegan or not
    const isVegan = response.vegan;

    //Might be nice to display information on whether it is sustainable or not
    const isSustainable = response.sustainable;

    //Here's the recipe summary; probably important to display.
    const recipeSummary = response.summary;

    //Here's the recipe instructions; NOTE--very long!
    //var recipeInstructions = response.instruction;

    console.log(
      `Is it vegetarian? ${isVegetarian}. Is it vegan? ${isVegan}. Is it sustainable? ${isSustainable}. Here's the summary: ${recipeSummary}.`
    );
  });
}

getRecipe("pears", "flour", "sugar");
