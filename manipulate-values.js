function filterValues(obj, func) {
    let res = {}
    for (let key in obj) {
        if (func(obj[key])) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapValues(obj, func) {
    let res = {}
    for (let key in obj) {

        res[key] = func(obj[key])

    }
    return res
}

function reduceValues(obj,func,dlm=0){
    let res = dlm
    for (let key in obj) {
        res = func(res,obj[key])
        //console.log(res);
        
    }
    return res
}

 const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3))