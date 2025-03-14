function isFriday(date) {
    return date.getDay() === 5
}


function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0
}


function isLeapYear(date) {
    let year = date.getFullYear()
    return (year % 4 === 0 )
}

function isLastDayOfMonth(date) {
    
}