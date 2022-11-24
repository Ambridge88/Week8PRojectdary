const { Model, DataTypes } = require('sequelize');
const db = require(`../db/db`)

class ATM extends Model { }
    
    ATM.init({
        location: {
            type:DataTypes.STRING
        },
        cash: {
            type:DataTypes.INTEGER
        },
        copper: {
            type:DataTypes.BOOLEAN
        }
    }, {sequelize: db} )

    module.exports = ATM