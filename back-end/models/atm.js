const { Model, DataTypes } = require('sequelize');
const db = require(`../db/db`)

class ATM extends Model { }
    
    ATM.init({
        longitude: {
            type:DataTypes.INTEGER
        },
        latitude: {
            type:DataTypes.INTEGER
        },
        cash: {
            type:DataTypes.INTEGER
        },
        copper: {
            type:DataTypes.BOOLEAN
        }
    }, {sequelize: db} )

    module.exports = ATM