const iframe = document.querySelectorAll("#iframe")
const video = document.querySelectorAll("#video")
const image = document.querySelectorAll("#images")

let loop = 0
let loopVideo = 0

const timeIframe = []

iframe.forEach((element) => {
    timeIframe.push(element.getAttribute('time'))
})

async function timeoutVideo() {

    video[loopVideo].style.display = 'block'
    video[loopVideo].play()
    video[loopVideo].muted = true

    video[loopVideo].onended = async() => {
        video[loopVideo].style.display = 'none'
        iframe[loop].style.display = 'block'
        start()
        loopVideo++
        if (loopVideo >= video.length) loopVideo = 0
    }

}


async function timeoutIframe(choice) {
    loop++
    if (loop >= timeIframe.length) loop = 0

    if (choice == 'iframe') {
        setTimeout(() => {
            iframe[loop].style.display = 'none'
            timeoutVideo()
        }, timeIframe[loop])
    }
}

async function start() {
    timeoutIframe('iframe')
}


window.addEventListener("load", start)