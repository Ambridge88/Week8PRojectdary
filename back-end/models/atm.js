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
            type:DataTypes.BOOLEAN,
            defaultValue: () => {
                const rollTheDice = Math.random()
                if (rollTheDice >= 0.7) {
                    return true
                }
                else{
                    return false
                }
            }
        }
    }, {sequelize: db} )

    module.exports = ATM