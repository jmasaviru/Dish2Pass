const express = require("express");

const router = express.Router();

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

/*

// Create all our routes and set up logic within those routes where required.
router.get("/suggestions", (req, res) => {
  RecipeTwo.all(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipeTwos", (req, res) => {
  RecipeTwo.create(
    ["recipeID", "recipe"],
    [req.body.recipeID, req.body.recipe],
    result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

*/

module.exports = router;
