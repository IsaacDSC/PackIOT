const { LinesProductions } = require("../database/models/linesProductions")
const { monitorLines } = require("../database/models/monitorLines")
const { insertRouterLines } = require('../helpers/generateRoutes')
const initializeSocket = require('../Server')

class SettingsController {
    async index(req, res) {
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
            initializeSocket.atualizaring(true)
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
            initializeSocket.atualizaring(true)
            const { line, image, link, active, time } = req.body
            const created = await monitorLines.create({ line, image: req.imageMonitor, link, active, time })
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
            initializeSocket.atualizaring(true)
            const { id, line, image, link, active, time } = req.body
            const updated = await monitorLines.update({ line, image, link, active, time }, { where: { id: id } })
                // insertRouterLines()
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
            initializeSocket.atualizaring(true)
            const deleted = await monitorLines.destroy({ where: { id: req.params.id } })
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
            initializeSocket.atualizaring(true)
            const deleted = await LinesProductions.destroy({ where: { id: req.params.id } })
            req.flash('success_msg', 'Deletado com sucesso!')
            res.redirect('/settings')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', 'Houve um problema tente novamente mais tarde')
            res.redirect('/settings')
        }
    }

    async searchLine(req, res) {
        try {
            const line = await monitorLines.findAll({ where: { line: req.body.line } })
            return res.send(line)
        } catch (error) {
            console.log(error)
        }
    }




}


module.exports = new SettingsController