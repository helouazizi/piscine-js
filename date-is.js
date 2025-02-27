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
function isAfter(date,date1){
    return date > date1
}
function isBefore(date,date1){
    return date1 > date 
}

function isFuture(date){
    return isValid(date) && isAfter(date,Date.now())
}
function isPast(date){
    return isValid(date) && isBefore(date,Date.now())
}
