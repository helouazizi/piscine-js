function pick(obj,arr){
    let res = {}
    if (!Array.isArray(arr)){
        arr = [arr]
    }
    for(let key in obj){
        if(arr.some(elm => elm === key)){
            res[key] = obj[key]
        }
    }

    return res
}


function omit(obj,arr){
    let res = {}
    if (!Array.isArray(arr)){
        arr = [arr]
    }
    for(let key in obj){
        if(arr.some(elm => elm === key)){
            res[key] = obj[key]
        }
    }

    return res
}