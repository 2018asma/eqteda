const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db')


class User extends Model{}

User.init({
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        },
        notEmpty: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'User'
})

module.exports = User;