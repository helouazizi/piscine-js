import { colors } from "./fifty-shades-of-cold.data.js"
export const generateClasses = () => {
    let style = document.createElement('style')
    document.head.append(style)
    let css = ""
    for (let color of colors) {
        css += `.${color}{background: ${color};}\n`

    }
    style.textContent = css
    css =""
}
export const generateColdShades = () => {
    for (let color of colors) {
        let div = document.createElement('div')
        div.classList.add(color)
        div.textContent = color
        document.body.append(div)
    }
}
export const choseShade = (arg) => {
    let alldivs = document.querySelectorAll('div')
    for (let div of alldivs){
        div.classList.replace(div.textContent,arg)
    }
}