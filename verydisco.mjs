import { argv } from 'node:process'
const arg = argv.slice(2).join(" ")
console.log(arg);

const midle = Math.ceil(arg.length / 2)
const last = arg.slice(midle)
const first =  arg.slice(0,midle)
const result =last.trim()+first.trim()
console.log(result);
