function isValid(date) {
    if (date instanceof Date) {
        return !isNaN(date.getTime())
    }
    return typeof date === "number" && typeof date !== "undefined" && date > 0
}

function isAfter(date1, date2) {
    return date1 - date2 > 0 && isValid(date1) && isValid(date2)
}

function isBefore(date1, date2) {
    return date1 - date2 < 0 && isValid(date1) && isValid(date2)
}
function isFuture(date) {
    return date - Date.now() > 0 && isValid(date) 
}
function isPast(date) {
    return date - Date.now() < 0 && isValid(date) 
}
console.log(isBefore(''));
