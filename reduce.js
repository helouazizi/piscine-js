function fold(arr,func,accum=0){
   for  (let i =0; i < arr.length ; i++){
    accum = func(accum,arr[i])
   }
   return accum
}

function foldRight(arr,func,accum=0){
    for  (let i =arr.length ; i>0; i--){
     accum = func(accum,arr[i])
    }
    return accum
 }