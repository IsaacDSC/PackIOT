//const { asd } = require('../models/accounts')
const { LinesProductions } = require('../models/linesProductions')
const { monitorLines } = require('../models/monitorLines')

const TABLES = [LinesProductions, monitorLines]
const initialize = async(active) => {
    TABLES.forEach(element => {
        if (active === true) element.sync({ force: true })
            //console.log(element)
            //if (active === true) element.sync({ force: true })
    })
}


module.exports = { initialize }