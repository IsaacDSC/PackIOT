const fs = require('fs')
const path = require('path')

const InlinesProcedules = require('../database/procedules/InlinesProcedules')

const rootDir = path.join(__dirname, '../', 'public', 'images', 'uploads')


const deletedImage = async(fileNameId) => {
    try {
        const verifyImage = await InlinesProcedules.searchOne(fileNameId)
        if (verifyImage.image) {
            fs.unlinkSync(`${rootDir}/${verifyImage.image}`);
        }
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}


module.exports = { deletedImage }