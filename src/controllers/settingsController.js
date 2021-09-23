const { LinesProductions } = require("../database/models/linesProductions")

class SettingsController {
    async index(req, res) {
        //const lines = 'df'
        try {
            const lines = await LinesProductions.findAll()
            res.render('settings/settings', { lines: lines })
        } catch (error) {
            console.log(error)
        }

    }
    async registerLine(req, res) {
        try {
            const { name, link } = req.body
            const created = await LinesProductions.create({ name, link })
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }
}


module.exports = new SettingsController