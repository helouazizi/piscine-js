function map(arr,func){
    let res = []
    for (let i =0 ; i< arr.length ; i++ ){
       res.push( func(arr[i],i,arr))
    }
    return res
}

function flatMap(arr , func){
    let res = []
    for (let i =0 ; i< arr.length ; i++ ){
      const val = func(arr[i],i,arr)
      if (Array.isArray(val)){
        res.push(...val)
      }else(
        res.push(val)
      )
    }
    return res
}
const arr = [1, 2, 3, 4];

console.log(map(arr,console.log))