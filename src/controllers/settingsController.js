const { LinesProductions } = require("../database/models/linesProductions")
const { monitorLines } = require("../database/models/monitorLines")

class SettingsController {
    async index(req, res) {
        //const lines = 'df'
        try {
            const lines = await LinesProductions.findAll()
            const Inlines = await monitorLines.findAll()
            res.render('settings/settings', { lines, Inlines })
        } catch (error) {
            console.log(error)
        }

    }
    async registerLine(req, res) {
        try {
            const { name, link } = req.body
            const created = await LinesProductions.create({ name, link })
            req.flash('success_msg', 'Registrado com sucesso')
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }

    async registerMonitorLine(req, res) {
        try {
            const { line, img, link, active, time } = req.body
            const created = await monitorLines.create({ line, img, link, active, time })
            req.flash('success_msg', 'Registrado com sucesso')
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }

    async editMonitorLine(req, res) {
        try {
            const { id, line, img, link, active, time } = req.body
            const updated = await monitorLines.update({ line, img, link, active, time }, { where: { id: id } })
            req.flash('success_msg', 'Editado com sucesso!')
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }

    async deleteMonitorLine(req, res) {
        try {
            const deleted = await monitorLines.destroy({ where: { id: req.params.name } })
            req.flash('success_msg', 'Deletado com sucesso!')
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }

    async deleteLine(req, res) {
        try {
            const deleted = await LinesProductions.destroy({ where: { id: req.params.id } })
            req.flash('success_msg', 'Deletado com sucesso!')
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }




}


module.exports = new SettingsController