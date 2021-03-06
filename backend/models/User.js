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
        notEmpty: true,
        unique:true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin:{
        type:DataTypes.BOOLEAN,
        defaultValue: 0,
    },
    token: {
        type:DataTypes.STRING,
    }
},{
    sequelize,
    modelName: 'User'
})

module.exports = User;