let timePV = 1000
let currentImageIndex = 0
let images = document.querySelectorAll("#slider #teste")
let max = images.length



async function getTime() {
    let time = document.querySelector('.selected').getAttribute('time') * 1000
        //let time = 5000
    return time
}

async function nextImage() {
    getTime()
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
        document.location.reload()
    }


    images[currentImageIndex]
        .classList.add("selected")

}


async function start() {
    setInterval(async() => {
        nextImage()
    }, await Promise.resolve(getTime()))
}



window.addEventListener("load", start)