function pyramid(s,n){
    let res = ""
    let e = 1
    for (let i = 1; i <= n; i++){
       
        for (let k = n-i; k > 0; k--){
            res += " ".repeat(s.length)
        }
        for (let j = 1; j <= e; j++){
            res += s
        } 
        e+=2
        if (i<n){
             res+= "\n"
        }
     
    } 
    return res
}

console.log(pyramid("{}",10))