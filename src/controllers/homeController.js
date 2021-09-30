const { LinesProductions } = require('../database/models/linesProductions')


class HomeController {
    async index(req, res) {
        res.redirect('/settings')
    }
}


module.exports = new HomeController