export const setBox = () => {
    let box = document.createElement('div')
    box.classList.add('box')
    document.body.append(box)
}

export const createCircle = () => {
    document.addEventListener("click", (event) => {
        let div = document.createElement('div')
        div.classList.add('circle')
        div.style.background = "white"
        div.style.left = `${event.clientX - 25}px`
        div.style.top = `${event.clientY - 25}px`
        document.body.append(div)
    })
}

export const moveCircle = () => {
    document.addEventListener("mousemove", (event) => {
        //console.log("X:", event.clientX, "Y", event.clientY)
        let alldivs = document.getElementsByClassName('circle')
        let box = document.querySelector('.box')
        if (alldivs.length > 0) {
            let lastone = alldivs[alldivs.length - 1]
            lastone.style.left = `${event.clientX - 25}px`
            lastone.style.top = `${event.clientY - 25}px`
            let cirvlerec = lastone.getBoundingClientRect()
            let boxrec = box.getBoundingClientRect()
            console.log("x", cirvlerec, boxrec)
            if (cirvlerec.left >= boxrec.left + 1 && cirvlerec.right <= boxrec.right - 1 && cirvlerec.top >= boxrec.top + 1 && cirvlerec.bottom <= boxrec.bottom - 1) {
                lastone.style.background = 'var(--purple)'
                document.removeEventListener("mousemove",moveCircle)
            }
        }
    })
}