function fusion(...args) {
    let res = {};
    args.forEach(obj => {
        for (let key in obj) {
            if (!(key in res)) {
                res[key] = obj[key]; // Assign directly if key is new
            } else {
                if (Array.isArray(res[key]) && Array.isArray(obj[key])) {
                    res[key] = res[key].concat(obj[key]); // Merge arrays
                } else if (typeof res[key] === "number" && typeof obj[key] === "number") {
                    res[key] += obj[key]; // Sum numbers
                } else if (typeof res[key] === "string" && typeof obj[key] === "string") {
                    res[key] += " "+obj[key]; // Concatenate strings
                } else if (typeof res[key] === "object" && typeof obj[key] === "object" && res[key] !== null && obj[key] !== null) {
                    res[key] = fusion(res[key], obj[key]); // Deep merge objects
                } else {
                    res[key] = obj[key]; // Replace if types mismatch
                }
            }
        }
    });

    return res;
}




