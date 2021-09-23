//const { asd } = require('../models/accounts')
const { LinesProductions } = require('../models/linesProductions')
let databases = [LinesProductions]
const initialize = async(active) => {
    if (active === true) LinesProductions.sync({ force: true })
}


module.exports = { initialize }