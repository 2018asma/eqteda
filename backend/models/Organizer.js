const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");


class Organizer extends Model {}
Organizer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Organizer",
  }
);


module.exports = Organizer;
