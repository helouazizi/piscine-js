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
function reduce(array, func) {
    if (array.length < 1) {
        throw new Error("Reduce of empty array with no initial value");
    }

    let accum = array[0]; // First element as the initial accumulator
    for (let i = 1; i < array.length; i++) {
        accum = func(accum, array[i]);
    }
    return accum;
}


