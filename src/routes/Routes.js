const express = require('express')
const router = express.Router()

//procedules from create router lines
const { LinesProductions } = require('../database/models/linesProductions')

//middlewares
const { auth } = require('../middlewares/auth')

//IMPORT CONTROLLERS
const homeController = require('../controllers/homeController')
const settingsController = require('../controllers/settingsController')
const accountController = require('../controllers/accountController')

LinesProductions

//NAVIGATIONS ROUTES
///route initialize system
router.get('/', homeController.index)
    ///routes settings 
router.get('/settings', settingsController.index)
    ///routes settings line
router.post('/settings/register/line', settingsController.registerLine)
router.get('/settings/delete/line/:name', settingsController.deleteLine)
    ///routes settings monitor line
router.post('/settings/register/monitor/line', settingsController.registerMonitorLine)
router.post('/settings/edit/monitor/line', settingsController.editMonitorLine)
router.get('/settings/delete/monitor/line/:id', settingsController.deleteMonitorLine)

///routes authenticated
router.get('/account', accountController.index)
router.post('/account', accountController.account)
router.get('/account/register', accountController.create)



module.exports = router