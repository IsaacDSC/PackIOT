//const { asd } = require('../models/accounts')
const { LinesProductions } = require('../models/linesProductions')
const { monitorLines } = require('../models/monitorLines')
const accounts = require('../models/accounts')

const TABLES = [LinesProductions, monitorLines, accounts]
const initialize = async(active) => {
    TABLES.forEach(element => {
        if (active === true) element.sync({ force: true })
            //console.log(element)
            //if (active === true) element.sync({ force: true })
    })
}


module.exports = { initialize }