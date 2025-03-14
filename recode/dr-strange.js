function addWeek(time) {
    let epoc = new Date('0001-01-01');
    //console.log(time - epoc.setSeconds);

    let day = ((time - epoc) / 1000 / 60 / 60 / 24) % 14
    return days[day]
}
function timeTravel(obj) {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
}).toString());


const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
    "secondFriday", "secondSaturday", "secondSunday"
]
//console.log(addWeek(new Date('0001-01-08')));
