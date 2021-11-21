/* const bcrypt = require('bcrypt')



async function teste() {

    const hash = await bcrypt.hash('joaquim.2018', 10)
    console.log(hash)

}


teste() */


const { searchFileUploads } = require('../src/helpers/searchFilesUploads')

searchFileUploads()