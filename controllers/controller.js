const express = require("express");
//const { DataTypes } = require("sequelize/types");

const router = express.Router();

const db = require("../models/index");

const http = require("http");
//const https = require("https");

router.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});

// router.get("/suggestions", (req, res) => {
//   res.render("suggestions", { layout: "main" });
// });

router.get("/suggestions", (req, res) => {
  db.RecipeTwo.findAll({}).then(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
    //const object = hbsObject.recipetwos;
    //console.log(object);
    res.render("suggestions", hbsObject);
  });
});

router.get("/search", (req, res) => {
  res.render("search", { layout: "main" });
});

router.get("/search/:ingredients", (req, res) => {
  const ingredients = req.params.ingredients;
  console.log(ingredients);
  //console.log(getRecipe2(ingredients));
  const object = getRecipe2(ingredients);
  console.log(object);
  /*const options = {
    hostname: "api.spoonacular.com",
    port: 8080,
    path: `/recipes/${ingredients.ingredients}/information?apiKey=8e8116330d3e4e36aeeae99f52100a74&number=5`,
    method: "GET"
  };
  console.log(options);
  const request = http.request(options, result => {
    console.log(`statusCode: ${result.statusCode}`);
    //console.log(res);
    result.on("data", d => {
      console.log(d);
      process.stdout.write(d);
      console.log(d);
    });
  });

  request.on("error", error => {
    console.error(error);
  });

  request.end();*/
  res.render("search", object);
});

router.get("/api/suggestions", (req, res) => {
  db.RecipeTwo.findAll({}).then(data => {
    const hbsObject = {
      recipetwos: data
    };
    const object = hbsObject.recipetwos;
    console.log(object);
    res.json(hbsObject);
  });
});

router.post("/api/recipes", (req, res) => {
  db.RecipeTwo.create(req.body).then(recipes => {
    const data = {
      recipes: recipes
    };
    res.json(data);
  });
});

function getRecipe2(ing) {
  const options = {
    hostname: "api.spoonacular.com",
    port: 8080,
    path: `/recipes/findByIngredients?ingredients=${ing}&number=10&apiKey=23b1dfa5fa844ad28a84a5a2d16c60ac&includeNutrition=true`,
    method: "GET"
  };
  //console.log(options);
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    //console.log(res);
    res.on("data", d => {
      //console.log(d);
      process.stdout.write(d);
      return d;
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.end();
  //return d;
}

module.exports = router;
