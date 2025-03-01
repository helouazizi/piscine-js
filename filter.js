function filter(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}
function reject(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}
function partition(arr, func) {
    let res = [[],[]]
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)){
            res[0].push(arr[i])
        }else{
            res[1].push(arr[i])
        }
    }
    return res
}
