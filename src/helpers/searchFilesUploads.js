const { join } = require('path')
const fs = require('fs')

const folder = {
    images: join(__dirname, '../', 'public', 'images', 'uploads'),
    videos: join(__dirname, '../', 'public', 'videos', 'uploads')
}

const searchFileUploadsVideos = async() => {
    try {
        const videos = await fs.readdirSync(folder.videos)
        return videos
    } catch (error) {
        console.log(error)
        return false
    }
}
const searchFileUploadsImages = async() => {
    try {
        const images = await fs.readdirSync(folder.images)
        return images
    } catch (error) {
        console.log(error)
        return false
    }
}


module.exports = { searchFileUploadsVideos, searchFileUploadsImages }