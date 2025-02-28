const is = {}

is.hassan = function (text){
    return text === "hassan"
}
is.num = function (num){
   return typeof num === 'number'
}



console.log(is.num("5"))
