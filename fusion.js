function fusion(...args) {
    let res = {};
    let exist = new Set();

    args.forEach(obj => {
        for (let key in obj) {
            if (!exist.has(key)) {
                // Initialize key with array or value depending on the type
                res[key] = Array.isArray(obj[key]) ? [...obj[key]] : obj[key];
                exist.add(key);
            } else {
                // If key exists, handle based on the type
                if (Array.isArray(res[key])) {
                    res[key] = res[key].concat(obj[key]);
                } else if (typeof res[key] === "number" /*&& typeof obj[key] === "number"*/) {
                    res[key] += obj[key];  // Sum the numbers
                } else if (typeof res[key] === "string" /*&& typeof obj[key] === "string"*/) {
                    res[key] += " "+ obj[key];  // Concatenate the strings
                } else if (typeof res[key] === "object" /*&& typeof obj[key] === "object" && obj[key] !== null*/) {
                    res[key] = fusion(res[key], obj[key]);
                } else {
                    // Replace with the value from the second object in case of type mismatch
                    res[key] = obj[key];
                }
            }
        }
    });

    return res;
}

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
// console.log(fusion({ num: 1 }, { num: 2 }));
// console.log(fusion({ str: "Hello " }, { str: "World!" }));
// console.log(fusion({ obj: { a: 1 } }, { obj: { b: 2 } }));
