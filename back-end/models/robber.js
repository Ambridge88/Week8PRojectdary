const { Model, DataTypes } = require('sequelize');
const db = require(`../db/db`)

class Robber extends Model { }
    
    Robber.init({
        cash: {
            type:DataTypes.INTEGER
        }
    }, {sequelize: db} )

    module.exports = Robber