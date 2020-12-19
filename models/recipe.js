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

  Recipe.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};
