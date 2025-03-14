function firstDayWeek(num, year) {
    //year = parseInt(year);  // Ensure year is a number
    let date = new Date("01-01-0001");  // Start at January 1st
    date.setFullYear(year)
    let offsetday = (num - 1) * 7
    date.setDate(date.getDate() + offsetday)
    while (date.getDay() != 1 && date.getDate() != 1) {
        date.setDate(date.getDate() - 1)
        console.log(date.getFullYear());
        console.log("hjhjh");
    }
    let day = String(date.getDate()).padStart(2, '0')
    year = String(year).padStart(4, '0')
    let month = String(date.getMonth() + 1).padStart(2, '0')

    return `${day}-${month}-${year}`;
}

console.log(firstDayWeek(1, '1000'));  // Expected: "01-01-1000"

