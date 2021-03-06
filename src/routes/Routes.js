const express = require('express')
const router = express.Router()
const multer = require('multer')
    //const upload = multer({ dest: 'uploads/' })

//Helper addicted function generate controller dinamic acess routes
const { insertRouterLines } = require('../helpers/generateRoutes')

//middlewares
const { auth } = require('../middlewares/auth')
const { upload } = require('../middlewares/upload')

//IMPORT CONTROLLERS
const homeController = require('../controllers/homeController')
const settingsController = require('../controllers/settingsController')
const accountController = require('../controllers/accountController')
const OverviewLinesController = require('../controllers/linesController')

//NAVIGATIONS ROUTES
router.get('/', homeController.index)
    //router get datas overview lines
router.get('/overview/:line', OverviewLinesController.index)

///routes settings
router.get('/settings', auth, settingsController.index)
router.post('/settings/line/search', settingsController.searchLine)
    ///routes settings line
router.post('/settings/register/line', auth, settingsController.registerLine)
router.get('/settings/delete/line/:id', auth, settingsController.deleteLine)
    ///routes settings monitor line
router.post('/settings/register/monitor/line', auth, upload.single('image'), settingsController.registerMonitorLine)
router.post('/settings/edit/monitor/line', auth, upload.single('image'), settingsController.editMonitorLine)
router.get('/settings/delete/monitor/line/:id', auth, settingsController.deleteMonitorLine)
router.post('/settings/edit/monitor/ordem/line', auth, settingsController.EditOrdem)

///routes authenticated
router.get('/account', accountController.index)
router.post('/account', accountController.account)
router.get('/account/register', accountController.create)



module.exports = router