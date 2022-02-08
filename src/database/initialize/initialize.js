//const { asd } = require('../models/accounts')
const { LinesProductions } = require('../models/linesProductions')
const { monitorLines } = require('../models/monitorLines')
const { Account } = require('../models/accounts')

const TABLES = [LinesProductions, monitorLines, Account]

const initialize = (active) => {
    if (active === true) {
        // TABLES.forEach(element => {
        //     element.sync({ force: true })
        //         //console.log(element)
        //         //if (active === true) element.sync({ force: true })
        // })
        Account.sync({ force: true })
        monitorLines.sync({ force: true })
        LinesProductions.sync({ force: true })
    }
}


module.exports = { initialize }