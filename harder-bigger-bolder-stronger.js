export const generateLetters = () => {
    for (let i = 1; i <= 120; i++) {
        let div = document.createElement('div')
        let leter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
        let fontsize = 10 + i
        div.textContent = leter
        div.style.backgroundColor = 'gray'
        div.style.fontSize = `${fontsize}px`
       // console.log(`${fontsize}px`)
        if (i <= 40) {
            div.style.fontWeight = "300"
            console.log(i,300)
        } else if (i <= 80) {
            div.style.fontWeight = "400"
        } else {
            div.style.fontWeight = "600"
        }
        document.body.append(div)
    }
}