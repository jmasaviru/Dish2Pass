//Recipe table for the dish2pass database.
//This table requires a user, and will be used and developed
//if/when the user session enhancement becomes viable.

module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
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

  //Here is the association with the user table
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  //Returning the Recipe model object
  return Recipe;
};
