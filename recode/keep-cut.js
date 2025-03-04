function cutFirst(arr){
    return arr.slice(2)
}



function cutLast(arr){
    return arr.slice(0,-2)
}

function cutFirstLast(arr){
    return arr.slice(2,-2)
}

function keepFirst(arr){
    if (arr.length < 2){
        return arr
    }
    return arr.slice(0,2)
}


function keepLast(arr){
    return arr.slice(-2)
}

function keepFirstLast(arr){
    if (arr.length < 4){
        return arr
    }
    return arr.slice(0,2)+arr.slice(-2)
}

console.log(keepFirstLast('ad'))