import  {argv}  from 'node:process'

// argv.forEach(element => {
//     console.log(element);
    
// });
//
const arg = argv.slice(2).join(" ")
const midle = Math.ceil( arg.length / 2)
const result = arg.slice(midle).join() + arg.slice(0,midle).join()
console.log(result);
