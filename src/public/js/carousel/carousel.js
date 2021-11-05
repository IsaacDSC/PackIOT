let timePV = 1000
let currentImageIndex = 0
let images = document.querySelectorAll("#slider #teste")
let max = images.length

images[0].classList.add('selected')

//document.getElementsByTagName('video')[0].load()

async function getTime(index) {
    let times = []
    images.forEach(element => {
        times.push(element.getAttribute('time'))
    })
    return times[index]
}

async function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
        start()
    }

    images[currentImageIndex]
        .classList.add("selected")


    return timeout()
}



async function timeout() {
    setTimeout(() => {
        nextImage()
    }, await Promise.resolve(getTime(currentImageIndex)))
}

async function start() {
    await getTime()
    await timeout()
}
/* async function start() {
    setInterval(async() => {
        nextImage()
    }, await Promise.resolve(getTime()))
} */



window.addEventListener("load", start)