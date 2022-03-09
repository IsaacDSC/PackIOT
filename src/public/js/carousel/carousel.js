const identify = document.querySelectorAll(".identify")
const timeIframe = []
const classIdentify = []
let loop = 0

identify.forEach((element) => {
    timeIframe.push(element.getAttribute('time'))
})

identify.forEach((element) => {
    classIdentify.push(element.getAttribute('id'))
})

async function increment(){
    loop++
    if (loop >= identify.length) loop=0
    changeFrame()
}

async function changeFrame(){
    switch (classIdentify[loop]){
        case "iframe":
           identify[loop].style.display = 'block'
           setTimeout(() => {
                identify[loop].style.display = 'none'
                increment()
                }, timeIframe[loop])
           break
        case "video":
            identify[loop].style.display = 'block'
            identify[loop].play()
            identify[loop].muted = true
            identify[loop].onended = async() => {
                identify[loop].style.display = 'none'
                increment()
                }   
            break
        case "image":
            identify[loop].style.display = 'block'
            setTimeout(() => {
                identify[loop].style.display = 'none'
                increment()
                }, timeIframe[loop])
            break
        default:
            console.log('Desculpa, você precisa ter uma expressão', classIdentify[loop])
            break
    }
}

window.addEventListener("load", changeFrame)