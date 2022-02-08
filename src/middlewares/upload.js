const multer = require("multer");
const fs = require("fs");
const path = require("path");

const banners = {
    folder_mp4: path.resolve(
        __dirname + "",
        "../",
        "public",
        "videos",
        "uploads"
    ),
    folder: path.resolve(__dirname + "", "../", "public", "images", "uploads"),
    TimeName: Date.now() + ".png",
    TimeGIF: Date.now() + ".gif",
};

const isAccepted = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if (
            file.mimetype == isAccepted[0] ||
            file.mimetype == isAccepted[1] ||
            file.mimetype == isAccepted[2] ||
            file.mimetype == isAccepted[3]
        ) {
            req.typeFile = "image";

            return cb(null, banners.folder);
        }
        if (file.mimetype == "video/mp4") {
            req.typeFile = "video";
            return cb(null, banners.folder_mp4);
        } else {
            return cb(null, false);
        }
    },
    filename: function(req, file, cb) {
        //function para contar arquivos
        let fileName = file.originalname;
        fs.readdir(banners.folder, (err, paths) => {
            req.imageMonitor = `${fileName}`;
            cb(null, `${fileName}`);
        });
    },
});
const upload = multer({
    storage,
    fileFilter: (req, res, cb) => {
        cb(null, true);
    },
});

module.exports = { upload };