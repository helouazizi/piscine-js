const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
    "secondFriday", "secondSaturday", "secondSunday"
]
function addWeek(time) {
    let times = time.split('-').map(index => Number(index))
    let day = times[2]
    if (day-14 <= 0) {
        console.log( day)
        console.log(days[day-1])
    }else if(day-14 > 0 && day-14 <= 14 ){
        day = day -14
        console.log( day)
        console.log(days[day-1])
    }else {
        day = day - 28 
        console.log( day)
        console.log(days[day-1])
    }

    console.log(times)


}
function timeTravel() {

}

addWeek("0001-01-09")