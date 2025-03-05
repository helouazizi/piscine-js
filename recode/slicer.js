function slice(arr, start=0, end = arr.length) {
    let res = []
    if (end < 0){
        end = arr.length+end
    }
    if (start < 0){
        start =arr.length + start
    }
    for (let i = start; i < end;i++){
        res.push(arr[i])
    }
    return Array.isArray(arr) ? res : res.join('')
}
//console.log([5, 5, 5, 5, 5, 5].slice(-1))

console.log(slice([5, 5, 5, 5, 5, 5],-1))