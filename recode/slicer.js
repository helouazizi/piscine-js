function slice(arr, start, end = arr.length) {
    if (start === undefined && end === undefined) {
        return arr
    }
    let res = []
    for (let i = start; i < end;i++){
        res.push(arr[i])
    }
    return Array.isArray(arr) ? res : res.join('')
}

console.log(slice("",2))