function triangle(str,num){
    let res = ""
    for (let i = 1 ; i <= num; i++){
        for (let j = 1; j <= i; j++){
            res += str
        }
        //res += str
        if (i<num){
            res += "\n"
        }
    }
    return res
}

console.log(triangle("*",5))