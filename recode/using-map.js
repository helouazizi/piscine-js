function citiesOnly(arr) {
    let res =[]
    arr.forEach(obj => {
        res.push(obj['city'])
    });
    return res
}


