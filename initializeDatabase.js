const { LinesProductions } = require('./src/database/models/linesProductions')
const { monitorLines } = require('./src/database/models/monitorLines')
const { Account } = require('./src/database/models/accounts')
const AccountProcedules = require('./src/database/procedules/AccountsProcedules')

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
    AccountProcedules.create('acrocha', 'acrocha@granadophebo.com.br', 'joaquim.2018')
    AccountProcedules.create('m.oros', 'All@12345@granadophebo.com.br', 'All@12345')
}



createUser()