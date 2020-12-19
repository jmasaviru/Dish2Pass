//RecipeTwo table for the dish2pass database.
//This table requires no user and no foreign key, and will be used and developed
//to record all suggested recipes that all users have logged/recorded.

module.exports = function(sequelize, DataTypes) {
  const RecipeTwo = sequelize.define("RecipeTwo", {
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    recipe: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  //Return the RecipeTwo object
  return RecipeTwo;
};
