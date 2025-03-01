
// function flow(funcs) {
//     return function(...args) {
//         return funcs.reduce((acc, func) => {
//             return func(acc);
//         })//, funcs[0](...args)); // Start by calling the first function with arguments
//     }
// }

function flow(funcs){
    return function(...args){
        let res=funcs[0](...args)
        for (let i = 1 ; i<funcs.length; i++){
            res = funcs[i](res)
        }
        return res
    }
}

// let v=flow([add,square])
// console.log(v(2,3));

// function add(a,b){
//     return a+b
// }
// function square(c){
//     return c*c
// }