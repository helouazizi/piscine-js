function filterValues(obj, func) {
    let res = {}
    for (let key in obj) {
        if (func(obj[key])) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapValues(obj,func){
    
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))