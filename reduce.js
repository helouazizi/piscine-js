function fold(arr, func, accum = 0) {
    for (let i = 0; i < arr.length; i++) {
        accum = func(accum, arr[i])
    }
    return accum
}

function foldRight(arr, func, accum = 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
        accum = func(accum, arr[i])
    }
    return accum
}
function reduce(arr, func, accum = undefined) {
    if (accum === undefined){
        accum = arr[0]
    }
    if (accum === NaN){
        return 'error'
    }
    for (let i = 0; i < arr.length; i++) {
        accum = func(accum, arr[i])
    }
    return accum
}

