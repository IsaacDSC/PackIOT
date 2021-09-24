const multer = require('multer')
const fs = require('fs')
const path = require('path')

const banners = {
    folder: path.resolve(__dirname + '', '../', 'public', 'images', 'lines'),
    fileName: '.png'
}

async function createFolder(path, nameFolder) {
    try {
        const folder = await fs.mkdirSync(`${path}/${nameFolder}`)
        return folder
    } catch (error) {
        console.log(error)
    }
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg']
        if (file.mimetype == isAccepted[0] || file.mimetype == isAccepted[1] || file.mimetype == isAccepted[2]) {
            const createFolder = createFolder(banners.folder, `0${req.body.banner}_${file.originalname}_${banners.fileName}`) /// create folder and folder name line
            cb(null, banners.folder)
        } else {
            return false
        }
    },
    filename: function(req, file, cb) {
        //function para contar arquivos
        if (req.body.banner) {
            fs.readdir(banners.folder, (err, paths) => {
                cb(null, `0${req.body.banner}_${file.originalname}_${banners.fileName}`)
            })
        }
    }
})
const upload = multer({
    storage,
    fileFilter: (req, res, cb) => {
        cb(null, true)
    }
})


module.exports = { upload }