function isValid(date){
    let tets = new Date(date)
    let isinstance = date instanceof Date
    if (date === ''){
        return false
    }
    if (!isNaN(date)){
        return true
    }
    if (!isinstance) {
        return false
    }
    return !isNaN(tets.getTime()) 
}

console.log(isValid(''))