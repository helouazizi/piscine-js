function chunk(arr,size){
    let res = []
    for (let i = 0 ; i <arr.length;i+= size){
        let sub = arr.slice(i,i+size)
        res.push(sub)
    }

    return res

}

console.log(chunk([5,5,5,5,5,5,5,5,5,5],3))