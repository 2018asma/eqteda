const Organizer = require("./Organizer");
const Program = require("./Program");
const OrganizerAccount = require('./OrganizerAccount')

Organizer.hasMany(Program, {
  as: "programs",
  foreignKey: "organizer_id",
  onDelete: "CASCADE",
});

Program.belongsTo(Organizer, {
  foreignKey: "organizer_id",
});

Organizer.hasOne(OrganizerAccount, {
  as: 'accounts',
  foreignKey: 'organizer_id',
  onDelete: 'CASCADE'
})

OrganizerAccount.belongsTo(Organizer,{
  foreignKey: 'organizer_id',
})


module.exports = {
  Organizer,
  Program,
  OrganizerAccount
};
