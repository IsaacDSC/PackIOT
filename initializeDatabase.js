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

//initialize()
const createUser = async() => {
    // Account.create({ username: 'Administrador', email: 'granadophebo.com.br', password: 'packIOT' })
    Account.create({ username: 'acrocha', email: 'acrocha@granadophebo.com.br', password: 'joaquim.2018' })
    Account.create({ username: 'm.oros', email: 'All@12345@granadophebo.com.br', password: 'All@12345' })
}



createUser()