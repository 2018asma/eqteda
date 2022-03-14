const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const OrganizerAccount = require("./OrganizerAccount");

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


// Association
Organizer.hasOne(OrganizerAccount, {
  as: 'accounts',
  foreignKey: 'organizerId',
  onDelete: 'CASCADE'
})

module.exports = Organizer;
