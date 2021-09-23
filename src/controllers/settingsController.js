const LinesProductions = require("../database/models/linesProductions")

class SettingsController {
    async index(req, res) {
        res.render('settings/settings')
    }
    async registerLine(req, res) {
        try {
            const { nameLine, linkLine } = req.body
            const created = await LinesProductions.create({ nameLine, linkLine })
            console.log(created)
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }
}


module.exports = new SettingsController