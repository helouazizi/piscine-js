function trunc(num) {
    let count = 0
    let res = 0
    while (num > 100) {
        n /= 1000
        count++
    }

    for (let i = 0; i < num; i++) {
        res += i
    }
    return res + count * 1000

}


function round(num) {
    let res = []
    if (!Array.isArray(num)){
        num = [num]
    }
    for (let i = 0; i < num.length; i++) {
        console.log(1);
        
        let trunccc = trunc(num[i])
        let dif = num[i] - trunccc
        if (dif < 0.5){
            res.push(trunc(num[i]))
        }else{
            res.push(trunc(num[i]+1))
        }
    }

    return res
}