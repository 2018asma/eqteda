const { Model, DataTypes} = require('sequelize')
const sequelize = require('../db')
const Organizer = require('./Organizer')

class OrganizerAccount extends Model{}

OrganizerAccount.init({
    telegram:{
        type: DataTypes.STRING
    },
    youtube:{
        type: DataTypes.STRING
    },
    instagram:{
        type: DataTypes.STRING
    },
    twitter:{
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'organizer_account'
})

module.exports = OrganizerAccount