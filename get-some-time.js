function firstDayWeek(num, year) {
    year = parseInt(year);  // Ensure year is a number
    let date = new Date(year, 0, 1);  // Start at January 1st

    let offsetday = (num-1)*7
    
    return `${day}-${month}-${formattedYear}`;
}

console.log(firstDayWeek(1, '1000'));  // Expected: "01-01-1000"

