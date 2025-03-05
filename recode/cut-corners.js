function trunc(num) {
    let count = 0
    let res = 0
    let sign = false
    let isbiger = false
    if ( num < 0 ){
        sign = true
        num = -num
    }
    if (num > 1000){
        while (num > 1000) {
            num -= 1000
            count++
            //console.log("ljli")
        }
        isbiger = true
    }
   
    while (num >= 1){
        num -=1
        res++
    }
    if (isbiger){
        res = res + count * 1000
    }
    //console.log(count,sign,res)
    return sign ? -res : res 

}


function round(num) {
    let res = []
    let not = true
    if (!Array.isArray(num)) {
        num = [num]
        not = false
    }
    for (let i = 0; i < num.length; i++) {
        let numi = num[i]
        let trunccc = trunc(numi)
        let dif = numi - trunccc
        if (numi >= 0) {
            res.push(dif < 0.5 ? trunccc : trunccc+1)
        } else {
            res.push(-dif < 0.5 ? trunccc : trunccc-1)
        }
    }

    return not ?res : res[0]
}

function floor(num){
    let res = []
    let not = true
    if (!Array.isArray(num)) {
        num = [num]
        not = false
    }
    for (let i = 0; i < num.length; i++) {
        let numi = num[i]
        let trunccc = trunc(numi)
        if (numi >= 0) {
            res.push( trunccc )
        } else {
            res.push(trunccc-1)
        }
    }

    return not ?res : res[0]
}


function ceil(num){
    let res = []
    let not = true
    if (!Array.isArray(num)) {
        num = [num]
        not = false
    }
    for (let i = 0; i < num.length; i++) {
        let numi = num[i]
        let trunccc = trunc(numi)
        if (numi > 0) {
            res.push(trunccc+1)
        } else {
            res.push(trunccc)
        }
    }

    return not ? res : res[0]
}

console.log(ceil([4]))