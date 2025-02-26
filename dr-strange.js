const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
    "secondFriday", "secondSaturday", "secondSunday"
]
function addWeek(time) {
    let epoch = new Date('0001-01-01')
    //console.log(((time-epoch)/1000/60/60/24)%14)
    let day = ((time-epoch)/1000/60/60/24)%14
    console.log(day)
    return days[day]
}
function timeTravel(obj) {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)

   return obj.date
}

let test = {
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }

console.log(timeTravel(test))