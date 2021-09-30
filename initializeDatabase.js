const { LinesProductions } = require('./src/database/models/linesProductions')
const { monitorLines } = require('./src/database/models/monitorLines')
const { Account } = require('./src/database/models/accounts')

const TABLES = [LinesProductions, monitorLines, Account]

const initialize = async(active) => {
    TABLES.forEach(element => {
        element.sync({ force: true })
            //console.log(element)
            //if (active === true) element.sync({ force: true })
    })
}

initialize()
const createUser = async() => {
    Account.create({ username: 'Administrador', email: 'granadophebo.com.br', password: 'packIOT' })
}