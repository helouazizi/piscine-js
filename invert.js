function invert(obj){
    let newobj = {}
    for (let key in  obj){
        if(obj.hasOwnProperty(key)){
            newobj[obj[key]] = key
        }
       
        //console.log(key,"hjjk",obj[key])
    }
    return newobj
}
const ages = { alice: 18, bob: 27 };

console.log(invert(ages))