const Atm = require('./atm')
const Copper = require('./copper')
const Robber = require('./robber')

Atm.hasMany(Copper)

Copper.belongsTo(Atm, {through: 'Atm_Copper'});

module.exports = { Atm, Copper, Robber }