//RecipeTwo table for the dish2pass database.
//This table requires no user and no foreign key, and will be used and developed
//to record all suggested recipes that all users have logged/recorded.

module.exports = function(sequelize, DataTypes) {
  const RecipeTwo = sequelize.define("RecipeTwo", {
    spoonacularId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  });

  //Return the RecipeTwo object
  return RecipeTwo;
};
