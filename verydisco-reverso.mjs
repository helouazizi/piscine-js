import { readFile } from "node:fs";
import { argv } from "node:process";


const file = argv[2]

const input  = readFile(file,(err)=>{
    if (err){
        console.log(err);
        process.exit(1)
    }
})
console.log(input);


const discoreverse = (word) => {
    const midle = Math.ceil(word.length/2)
    return word.slice(midle) + word.slice(0,midle)
}

const result = input.split(" ").map(discoreverse).join(" ")
console.log(result);
