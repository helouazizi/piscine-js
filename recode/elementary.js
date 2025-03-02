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

console.log(multiply(-5,-5))