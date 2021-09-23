const Account = require('../database/models/accounts')


class HomeController {
    async index(req, res) {
        const results = await Account.findAll()
        console.log(results)
        res.render('home/index')
    }
}


module.exports = new HomeController