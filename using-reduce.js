function adder(arr,any =0){
    return arr.reduce((acum ,num) => acum + num, any)
}
function sumOrMul(arr,any =0){
    return arr.reduce((accum,num)=> (num %2 === 0 ? accum * num : accum + num),any)
}

function funcExec(arr,any =0){
    return arr.reduce((acc , func)=> func(acc),any)
}
const array1 = [29, 23, 3, 2, 25]
console.log(sumOrMul(array1));
