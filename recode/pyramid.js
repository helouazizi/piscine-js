function pyramid(str,n){
    let res = ""
    let e = 1
    for (let i = 1 ; i <= n; i++){
        for (let j = n-i; j>0; j--){
            res += " ".repeat(str.length)
        }
        for (let j = 1; j <= e; j++){
            res += str
        }
        e+= 2
        //res += str
        if (i<n){
            res += "\n"
        }
    }
    return res
}
console.log(pyramid("*",5));
