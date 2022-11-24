const { Model, DataTypes } = require('sequelize');
const db = require(`../db/db`)

class Copper extends Model { }
    
    Copper.init({
        chanceToSteal: {
            type:DataTypes.INTEGER
        }
    }, {sequelize: db} )



  module.exports = Copper