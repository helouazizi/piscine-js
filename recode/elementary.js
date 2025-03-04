function multiply(a,b){
    let res = 0
    let sighn = false
    if (b< 0){
        b =-b
        sighn = true
    }
    else if (a < 0){
        sighn = true
        a =-a
    }
    else if (a< 0 && b < 0){
        sighn = false
        a = -a
        b = -b
    }

    for (let i = 1; i <= b; i++){
        res += a
    }
    return sighn ? -res : res
}


function divide(a,b){
    if (Object.is(b,-0)){
        return Number.NEGATIVE_INFINITY
    }
    if (Object.is(b,0)){
        return Number.POSITIVE_INFINITY
    }
    let res = 0
    let sighn = (a<0 !== b<0)
    
    a = Math.abs(a)
    b = Math.abs(b)
    while (multiply(res,b) < a){
        
        res++
    }
    //console.log(sighn)
    return sighn ? -(res-1) : (res-1)
}

function modulo(a,b){
    return a - multiply(divide(a,b),b)
}
//console.log(-10/-5)

console.log(divide(34, 78))