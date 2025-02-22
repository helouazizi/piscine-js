function triangle(s,n){
    let res = ""
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            res += s
        } 
        if (i<n){
             res+= "\n"
        }
     
    } 
    return res
}


console.log(triangle("*",5))