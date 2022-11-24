const { Model, DataTypes } = require('sequelize');
const db = require(`../db/db`)



class Copper extends Model { }
    
    Copper.init({
        chanceToSteal: {
            type:DataTypes.BOOLEAN,
            defaultValue: () => {
                const rollTheDice = Math.random()
                if (rollTheDice >= 0.5) {
                    return true
                }
                else{
                    return false
                }
            }
        }
    }, {sequelize: db} )



  module.exports = Copper