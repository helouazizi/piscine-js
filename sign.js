function sign(num){
    if (Object.is(num,0)){
        return 0
    }
    return (num > (0))? 1 : -1 
}

function sameSign(num1,num2){
    return (sign(num1)== sign(num2)) ? true : false
}
