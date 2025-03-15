function sunnySunday(date) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the real weekday (0 = Sunday, 6 = Saturday)
    let realWeekday = date.getUTCDay(); 

    // If it's Sunday (0), shift it to Saturday (6), otherwise adjust the day by -1
    let adjustedDay = realWeekday === 0 ? 0 : realWeekday;

    // Return the correct day of the week
    return days[adjustedDay-1];
}
console.log(sunnySunday(new Date('0001-01-07'))); // "Friday"