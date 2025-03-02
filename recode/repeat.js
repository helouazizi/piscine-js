function repeat(str,num){
    if (num === 0) {
        console.log(str.length)
        return str
    }
    console.log(i)
    return repeat(str+str,num-1,i++)
}
let i = 1
console.log(repeat("h",5));
