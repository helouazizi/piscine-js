
function indexOf(arr, val, startindex = 0) {
    if (startindex < 0 || startindex > arr.length) {
        return -1
    }
    let res = -1
    for (startindex; startindex < arr.length; startindex++) {
        if (arr[startindex] === val) {
            return startindex
        }
    }
    return -1

}

function lastIndexOf(arr, val, startindex = arr.length) {
    if (startindex < 0 || startindex > arr.length) {
   
        return -1
    }
    console.log(startindex)
    for (startindex; startindex >= 0; startindex--) {
        if (arr[startindex] === val) {
            return startindex
        }
    }
    return -1
}

function includes(arr, val) {
    let index = indexOf(arr, val)
    if (index === -1) {
        return false
    }
    return true
}
