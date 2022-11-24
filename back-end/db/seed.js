const { Atm, Copper, Robber} = require('../models')
const db = require('./db')

const fetchSettings = { 
    "async": true, 
    "crossDomain": true, 
    "method": "GET", 
    "headers": { 
    "cache-control": "no-cache", 
    } 
    };



const seed = async () => {
    await db.sync({
        force:true
    })

        const response = await fetch(`https://atlas.api.barclays:443/open-banking/v2.2/atms`, fetchSettings)
        const data = await response.json()
    
        for(let i=0; i<data.data[0].Brand[0].ATM.length; i++){
            const location = await data.data[0].Brand[0].ATM[i].Location.PostalAddress.GeoLocation.GeographicCoordinates
            const atmLatitude = location.Latitude
            const atmLongitude = location.Longitude
            await Atm.create({
                latitude: atmLatitude,
                longitude: atmLongitude,
                cash: 0,
                copper: false 
            })
        }

    await Copper.bulkCreate([
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
    ])

    await Robber.bulkCreate([
        {
            cash: 0
        }
    ])
}

module.exports = seed