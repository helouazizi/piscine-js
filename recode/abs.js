function isPositive(num) {
    if (Object.is(num, 0)) {
        return true
    } else if (Object.is(num, -0)) {
        return false
    } else if (num < 0) {
        return false
    }else{
        return true
    }
}

function abs(num){
    if (!isPositive(num)){
        return -num
    }
    return num
}

console.log(abs(8))