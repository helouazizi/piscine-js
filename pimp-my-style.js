import { styles } from "./pimp-my-style.data.js"
let i = 0
let inremove = false
export const pimp = () => {
    let btn = document.querySelector("button");
    if (btn) {
        if (!inremove) {
            if (i < styles.length) {
                console.log(styles[i]);
                btn.classList.add(styles[i]);
                i++;
            }
            if (i === styles.length){
                inremove = true
                btn.classList.toggle("unpimp", true); // Toggle unpimp ON
            }
        } else {
            i--
            btn.classList.remove(styles[i])
            if (i===0){
                inremove = false
                btn.classList.toggle("unpimp", false); // Toggle unpimp ON
            }
            
        }

    }

}