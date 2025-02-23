function ionOut(s){
    let reg = /tion[.,]?/g
    let res =[ ]
    s = s.split(' ')
    for (let i = 0 ; i < s.length; i++){
        if (reg.test(s[i])){
            res.push(s[i].replace(reg,'t'))
        }
    }
    return res
}

console.log(ionOut('attention, direction'))