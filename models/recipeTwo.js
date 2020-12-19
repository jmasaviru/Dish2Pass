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

  return RecipeTwo;
};
