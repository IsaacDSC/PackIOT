const { LinesProductions } = require('./src/database/models/linesProductions')
const { monitorLines } = require('./src/database/models/monitorLines')

const TABLES = [LinesProductions, monitorLines]
const initialize = async(active) => {
    TABLES.forEach(element => {
        if (active === true) element.sync({ force: true })
            //console.log(element)
            //if (active === true) element.sync({ force: true })
    })
}

initialize()