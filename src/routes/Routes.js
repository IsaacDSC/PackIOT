const express = require('express')
const router = express.Router()

//middlewares
const { auth } = require('../middlewares/auth')

//IMPORT CONTROLLERS
const homeController = require('../controllers/homeController')
const settingsController = require('../controllers/settingsController')
const accountController = require('../controllers/accountController')


//NAVIGATIONS ROUTES
router.get('/', homeController.index)

router.get('/settings', settingsController.index)
router.post('/settings/register/line', settingsController.registerLine)

router.get('/account', accountController.index)
router.post('/account', accountController.account)
router.get('/account/register', accountController.create)



module.exports = router