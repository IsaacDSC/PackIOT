require('dotenv').config()
const initializeSocket = require('../Server')
const LinesProcedules = require('../database/procedules/LinesProcedules')
const MessagesFlash = require('../helpers/messages')
const InlinesProcedules = require('../database/procedules/InlinesProcedules')
const { deletedImage } = require('../helpers/deleteImage')
const { searchFileUploadsImages, searchFileUploadsVideos } = require('../helpers/searchFilesUploads')


class SettingsController {
    async index(req, res) {
        try {
            let ServerHost = process.env.PRODUCTION
            const lines = await LinesProcedules.searchAll()
            const Inlines = await InlinesProcedules.searchAll()
            let Lines = lines ? lines : null
            const UploadsVideos = await searchFileUploadsVideos()
            const UploadsImages = await searchFileUploadsImages()
            console.log(UploadsImages, UploadsVideos)
            res.render('settings/settings', { lines: Lines, Inlines, ServerHost, UploadsVideos, UploadsImages })
        } catch (error) {
            console.log(error)
        }

    }
    async registerLine(req, res) {
        const { name, link } = req.body
        const created = await LinesProcedules.create(name, link)
        if (created) {
            initializeSocket.atualizaring(true)
            new MessagesFlash().success(req, res, 'Registrado com sucesso', '/settings')

        } else {
            new MessagesFlash().error(req, res, '/settings')
        }
    }

    async registerMonitorLine(req, res) {
        const created = await InlinesProcedules.create({
            line: req.body.line,
            image: req.typeFile == 'image' ? req.imageMonitor : req.body.image,
            video: req.typeFile == 'video' ? req.imageMonitor : req.body.video,
            link: req.body.link ? req.body.link : '',
            active: req.body.active,
            time: req.body.time,
            ordem: req.body.ordem
        })
        if (created) {
            initializeSocket.atualizaring(true)
            new MessagesFlash().success(req, res, 'Registrado com sucesso', '/settings')
        } else {
            new MessagesFlash().error(req, res, '/settings')
        }
    }


    async editMonitorLine(req, res) {
        const updated = await InlinesProcedules.updated(req.body, req.body.id)
        if (updated) {
            initializeSocket.atualizaring(true)
            new MessagesFlash().success(req, res, 'Editado com sucesso', '/settings')
        } else {
            new MessagesFlash().success(req, res, '/settings')
        }
    }

    async deleteMonitorLine(req, res) {
        const ISdeletedImage = await deletedImage(req.params.id)
        if (!ISdeletedImage) console.log('\n\nerror delete image\n\n')

        const deleted = await InlinesProcedules.delete(req.params.id)
        if (deleted) {
            initializeSocket.atualizaring(true)
            new MessagesFlash().success(req, res, 'Deletado com sucesso', '/settings')
        } else {
            new MessagesFlash().error(req, res, '/settings')
        }

    }

    async deleteLine(req, res) {
        /*         //Search Array Images from delete
                const verifyImage = await InlinesProcedules.searchAll()

                /// delete if exist image of array
                verifyImage.forEach(element => {
                    if (element.image) {
                        const deleted = deletedImage(verifyImage.image)
                    }
                }) */

        //delete title line database
        const deleted = await LinesProcedules.delete(req.params.id)
        if (deleted) {
            initializeSocket.atualizaring(true)
            new MessagesFlash().success(req, res, 'Deletado com sucesso', '/settings')
        } else {
            new MessagesFlash().error(req, res, '/settings')
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
            new MessagesFlash().success(req, res, 'Editado com sucesso', '/settings')
        } else {
            new MessagesFlash().error(req, res, '/settings')
        }
    }

}


module.exports = new SettingsController