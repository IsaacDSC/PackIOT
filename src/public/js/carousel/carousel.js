let timePV = 1000
let currentImageIndex = 0
let images = document.querySelectorAll("#slider #teste")
let max = images.length

//document.getElementsByTagName('video')[0].load()

async function getTime() {
    let time = document.querySelector('.selected').getAttribute('time')
    if (time < 1000) time = 1000
    if (time) return time
}

async function nextImage() {
    getTime()

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")


    timeout()
}



async function timeout() {
    setTimeout(() => {
        nextImage()
    }, await Promise.resolve(getTime()))
}

async function start() {
    timeout()
}
/* async function start() {
    setInterval(async() => {
        nextImage()
    }, await Promise.resolve(getTime()))
} */



window.addEventListener("load", start)