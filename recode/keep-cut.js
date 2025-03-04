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
    
}

console.log(keepFirst('a'))