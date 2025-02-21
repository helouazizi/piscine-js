function slice(arr, s , e=arr.length) {
    let res = []
    if ( s>=arr.length) {
        return typeof arr ==="string" ? res.join("") : res  
    }
    if (s<0 && e<0) {
        e = arr.length-(-e)
        s = arr.length - (-s)
    } else if (s<0) {
        s = arr.length - (-s)
    } else if (e<0) {
        e = arr.length-(-e)
     }  
    for (s; s<e ; s++) {
        res.push(arr[s])
    }
    
    
    return typeof arr ==="string" ? res.join("") : res  
}