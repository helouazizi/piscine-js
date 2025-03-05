function fusion(...args){
    let res = {}
    let exist = new Set()
    args.forEach(obj => {
        for (let key in obj){
            if (!exist.has(key)){
                console.log(obj[key]);
                res[key] = 
            }else {
                //console.log(obj[key]);
                
                res[key].push(obj[key])
            }
           
        }
    })

    return res
}
//const obj = 

console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))