const express = require("express");
//const { DataTypes } = require("sequelize/types");

const router = express.Router();

const db = require("../models/index");

router.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});

router.get("/suggestions", (req, res) => {
  db.Favorite.findAll({}).then(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
    res.render("suggestions", hbsObject);
  });
});

router.get("/search/:ingredients", (req, res) => {
  db.RecipeTwo.findAll({
    where: {
      type: req.params.ingredients
    }
  }).then(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
    res.render("search", hbsObject);
  });
});

router.get("/api/suggestions", (req, res) => {
  db.favorites.findAll({}).then(data => {
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

module.exports = router;
