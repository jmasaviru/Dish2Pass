const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
//const RecipeTwo = require("../models/recipeTwo.js");

router.get("/", (req, res) => {
  res.render("index");
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
