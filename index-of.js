
function indexOf(arr, val, startindex) {
    let res = -1
    if (startindex < 0 || startindex > arr.length || startindex === undefined) {
        startindex = 0
    }
    for (let i = startindex ; i < arr.length ; i++){
        if (arr[i]=== val){
            res = i
            break
        }
    }
    return res

}

function lastIndexOf (arr, val,startindex) {
    let res = -1
    if (startindex < 0 || startindex > arr.length || startindex === undefined) {
        startindex = arr.length
    }
    for (let i = startindex ; i > 0 ; i--){
        if (arr[i] === val){
            res = i
            break
        }
    }
    return res
}

function includes (arr, val){
    let index =indexOf(arr, val)
    if ( index === -1){
        return false
    }
    return true
}

