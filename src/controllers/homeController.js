const { LinesProductions } = require('../database/models/linesProductions')


class HomeController {
    async index(req, res) {
        const navigators = await LinesProductions.findAll()
        res.render('lines/navigation', { navigators })
    }
}


module.exports = new HomeController