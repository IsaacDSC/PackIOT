const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '../', 'public', 'images', 'uploads')


const deletedImage = async(fileName) => {
    try {
        fs.unlinkSync(`${rootDir}/${fileName}`);
        return true
    } catch (error) {
        return false
    }

}


module.exports = { deletedImage }