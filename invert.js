function invert(obj){
    let newobj = {}
    for (key in  obj){
        newobj[obj[key]] = key
        //console.log(key,"hjjk",obj[key])
    }
    return newobj
}
const ages = { alice: 18, bob: 27 };

console.log(invert(ages))