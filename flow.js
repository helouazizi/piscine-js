
function flow(funcs){
    return function(...args){
        let res=funcs[0](...args)
        for (let i = 1 ; i<funcs.length; i++){
            res = funcs[i](res)
        }
        return res
    }
}