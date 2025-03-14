function isValid(date) {
    if (date instanceof Date) {
        return !isNaN(date.getTime())
    }
    return typeof date === "number" && date > 0
}
console.log(isValid(Date.now()));
