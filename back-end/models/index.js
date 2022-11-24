const Atm = require('./atm')
const Copper = require('./copper')
const Robber = require('./robber')

Atm.hasMany(Copper)

Copper.belongsTo(Atm, {through: 'Atm_Copper'});

Atm.hasOne(Robber)

Robber.belongsTo(Atm, {through: 'Robber_Atm'})

module.exports = { Atm, Copper, Robber }