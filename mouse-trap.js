export const setBox = () => {

}

export const createCircle = () => {
    document.addEventListener("click", (event) => {
        console.log("X:", event.clientX, "Y", event.clientY)
        let div = document.createElement('div')
        div.classList.add('circle')
        div.style.background = "white"
        div.style.left = `${event.clientX}px`
        div.style.top = `${event.clientY}px`
        document.body.append(div)
    })
}

export const moveCircle = () => {
    document.addEventListener("mousemove", (event) => {
        //console.log("X:", event.clientX, "Y", event.clientY)
        let alldivs = document.getElementsByClassName('circle')
        let lastone = alldivs[alldivs.length - 1]
        lastone.style.left = `${event.clientX}px`
        lastone.style.top = `${event.clientY}px`
    })
}