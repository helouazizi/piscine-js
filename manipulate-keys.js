function filterKeys(obj, func) {
    let res = {}
    for (let key in obj) {
        if (func(key)) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapKeys(obj, func) {
    let res = {}
    for (let key in obj) {
        
        let val = obj[key]
        key = func(key)
        res[key] = val

    }
    return res
}

function reduceKeys(obj,func){
    let res = ""
    for (let key in obj) {
        res = func(res,key)
    }
    return res
}


const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// // console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3))
//console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))