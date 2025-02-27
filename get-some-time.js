function firstDayWeek(num, year) {
    year = parseInt(year);  // Ensure year is a number
    let date = new Date(year, 0, 1);  // Start at January 1st

    let offsetday = (num-1)*7
    date.setDate(date.getDate()+offsetday)
    let day = String(date.getDate()).padStart(2,'0')
    year = String(year).padStart(4,'0')
    let month = String(date.getMonth()+1).padStart(2,'0')

    return `${day}-${month}-${year}`;
}

console.log(firstDayWeek(52, '1000'));  // Expected: "01-01-1000"

