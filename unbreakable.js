function split(str,dlm){
    let res = [];
    let temp = "";
    

    for (let i= 0;i < str.length;i++) {
    
        if (str.slice(i, i + dlm.length) == dlm) {
            res.push(temp); // Store the current segment
            temp = ""; // Reset for the next segment
            i += dlm.length -1
           
        } else {
            temp += str[i]; // Add character to current segment            
        }
    }

    res.push(temp); // Push the last segment
    return res;

}

console.log(split('rrrr', 'rr'))