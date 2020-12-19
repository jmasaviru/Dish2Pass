const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const recipeTwo = require("../models/recipeTwo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  recipeTwo.all(data => {
    const hbsObject = {
      recipetwos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipeTwos", (req, res) => {
  recipeTwo.create(
    ["recipeID", "recipe"],
    [req.body.recipeID, req.body.recipe],
    result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;
