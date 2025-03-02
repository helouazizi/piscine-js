import { styles } from "./pimp-my-style.data.js"


export const pimp = () => {
    console.log(styles);
    let i = 0
    let step = 0
    for (let i = 0 ; i< styles.length ; i++){
        let btn = document.querySelector('button')
        console.log(styles[i])
        btn.classList.add(styles[i])
    }
   




}