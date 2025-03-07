function split(str,dlm = ''){
    let res = [];
    let test = '';
    let dlmlength = dlm.length

    // Handle case where dlm is an empty string: split into characters
    if (dlm === '') {
        for (let i = 0; i < str.length; i++) {
            res.push(str[i]);
        }
        return res;
    }

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i,i+dlmlength) === dlm) {
            res.push(test);
            test = ''; // Reset test
            i += dlmlength-1
        } else {
            test += str[i]; // Build substring
        }
    }

    res.push(test); // Push last part

    return res;
}

function join(arr,dlm = ''){
    let res = ""
    for (let i= 0;i < arr.length;i++) {
        res += arr[i]
        if (i < arr.length-1) {
            res += dlm
        }
    }
    return res

}