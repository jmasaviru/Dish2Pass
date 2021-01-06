const express = require("express");
//const { DataTypes } = require("sequelize/types");

const router = express.Router();

const db = require("../models/index");

router.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});

router.get("/suggestions", (req, res) => {
  res.render("suggestions", { layout: "main" });
});

router.get("/search", (req, res) => {
  res.render("search", { layout: "main" });
});

router.get("/api/suggestions", (req, res) => {
  db.RecipeTwo.findAll({}).then(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
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
