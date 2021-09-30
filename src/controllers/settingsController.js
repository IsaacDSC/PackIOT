require('dotenv').config()
const { LinesProductions } = require("../database/models/linesProductions")
const { monitorLines } = require("../database/models/monitorLines")
const { insertRouterLines } = require('../helpers/generateRoutes')
const initializeSocket = require('../Server')
const LinesProcedules = require('../database/procedules/LinesProcedules')
const MessagesFlash = require('../helpers/messages')
const InlinesProcedules = require('../database/procedules/InlinesProcedules')

class SettingsController {
    async index(req, res) {
        try {
            let ServerHost = process.env.PRODUCTION
            const lines = await LinesProcedules.searchAll()
            let Lines = lines ? lines : null
            res.render('settings/settings', { lines: Lines, ServerHost })
        } catch (error) {
            console.log(error)
        }

    }
    async registerLine(req, res) {
        const { name, link } = req.body
        const created = await LinesProcedules.create(name, link)
        if (created) {
            initializeSocket.atualizaring(true)
            let message = new MessagesFlash().success(req, res, '/settings')
            console.log(message)
        } else {
            let message = new MessagesFlash().error(req, res, '/settings')
            console.log(message)
        }
    }

    async registerMonitorLine(req, res) {
        const created = await InlinesProcedules.create({ line: req.body.line, image: req.imageMonitor, link: req.body.link, active: req.body.active, time: req.body.time, ordem: req.body.order })
        if (created) {
            initializeSocket.atualizaring(true)
            let msg = new MessagesFlash().success(req, res, '/settings')
            console.log(msg)
        } else {
            let msgError = new MessagesFlash().error(req, res, '/settings')
            console.error(msgError)
        }
    }


    async editMonitorLine(req, res) {
        const { id, line, image, link, active, time } = req.body
        const updated = await InlinesProcedules.updated({ line, image, link, active, time }, id)
        if (updated) {
            initializeSocket.atualizaring(true)
            let msg_success = new MessagesFlash().success(req, res, '/settings')
            console.log(msg_success)
        } else {
            let error_success = new MessagesFlash().success(req, res, '/settings')
            console.log(error_success)
        }
    }

    async deleteMonitorLine(req, res) {
        const deleted = await InlinesProcedules.delete(req.params.id)
        if (deleted) {
            initializeSocket.atualizaring(true)
            let msg_success = new MessagesFlash().success(req, res, '/settings')
            console.log(msg_success)
        } else {
            let error_success = new MessagesFlash().error(req, res, '/settings')
            console.log(error_success)
        }

    }

    async deleteLine(req, res) {
        const deleted = await LinesProcedules.delete(req.params.id)
        if (deleted) {
            initializeSocket.atualizaring(true)
            let msg_success = new MessagesFlash().success(req, res, '/settings')
            console.log(msg_success)
        } else {
            let error_success = new MessagesFlash().error(req, res, '/settings')
            console.log(error_success)
        }
    }

    async searchLine(req, res) {
        const line = await InlinesProcedules.searchByLine(req.body.line)
        if (line) res.send(line)
        else res.send(null)
    }

    async EditOrdem(req, res) {
        const { id, ordem, active } = req.body
        const updated = await InlinesProcedules.EditOrdem({ ordem, active }, id)
        if (updated) {
            initializeSocket.atualizaring(true)
            let msg_success = new MessagesFlash().success(req, res, '/settings')
            console.log(msg_success)
        } else {
            let error_success = new MessagesFlash().error(req, res, '/settings')
            console.log(error_success)
        }
    }

}


module.exports = new SettingsController