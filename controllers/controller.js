const express = require("express");
//const { DataTypes } = require("sequelize/types");

const router = express.Router();

const db = require("../models/index");
//const recipes = db[recipeTwo];
//const RecipeTwo = require("../models/recipeTwo.js");

router.get("/", (req, res) => {
  res.render("index", { layout: "main" });
  //res.render("index");
});

router.get("/suggestions", (req, res) => {
  res.render("suggestions", { layout: "main" });
  //res.render("suggestions");
});

router.get("/search", (req, res) => {
  res.render("search", { layout: "main" });
  //res.render("search");
});

router.get("/api/suggestions", (req, res) => {
  db.RecipeTwo.findAll({}).then(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
    //console.log(hbsObject.recipeTwos[0].dataValues);
    res.json(hbsObject);
    //res.render("suggestions", { layout: "main" });
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

// router.post("/api/recipes", (req, res) => {
//   db.RecipeTwo.create(
//     ["recipeID", "recipe"],
//     [req.body.recipeID, req.body.recipe],
//     result => {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     }
//   );
// });

// router.post("/api/recipes", function (req, res) {
//   console.log(req.body);
//   db.RecipeTwo.create(req.body).then(function (recipes) {
//     var data = {
//       dbOrders: dbOrders
//     };
//     res.json(data);
//   }).catch(function (error) {
//     var errormessage = {
//       error: error.original.sqlMessage
//     };
//     res.json(errormessage);
//   });
// });

module.exports = router;
