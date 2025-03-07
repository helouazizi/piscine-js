function filterEntries(obj, func) {
    let res = {}
    for (const [key, val] of Object.entries(obj)) {
        if (func([key, val])) {
            res[key] = val
        }
    }
    return res
}
function mapEntries(obj, func) {
    let res = {}
    for (const [key, val] of Object.entries(obj)) {
        let [keyes, values] = func([key, val])
        res[keyes] = values
    }
    return res
}

function reduceEntries(obj, func) {
    let res = ''
    for (const [key, val] of Object.entries(obj)) {
        res = func(res, [key, val])
    }
    return res
}

function lowCarbs(obj) {
    return filterEntries(obj, ([key, val]) =>  nutritionDB[key].carbs * (val/100) <= 50);
 }

 function totalCalories(obj) {
    const result = reduceEntries(obj, (acc, [key, val]) => {
        acc += nutritionDB[key].calories * (val / 100);
        return parseFloat(acc);
    });
    return Math.round(result*10)/10
}

function cartTotal(obj) {
   return mapEntries(obj, ([key, val]) => {
        const item = nutritionDB[key];
        if (item) {
            // Calculate the nutritional values based on the quantity (val) and round to 2 decimal places
            return [
                key, {
                    calories: Math.round(item.calories * (val / 100) * 100) / 100,
                    protein: Math.round(item.protein * (val / 100) * 1000) / 1000,
                    carbs: Math.round(item.carbs * (val / 100) * 1000) / 1000,
                    sugar: Math.round(item.sugar * (val / 100) * 100) / 100,
                    fiber: Math.round(item.fiber * (val / 100) * 100) / 100,
                    fat: Math.round(item.fat * (val / 100) * 1000) / 1000
                }
            ];
        }
        return [key, {}];  // Return an empty object if the item is not found in nutritionDB
    });
}



 

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }



