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
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};
