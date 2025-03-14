function firstDayWeek(num,year) {
    let dayofset = ((num-1) *7)
    let date = new Date("01-01-0001");
    date.setFullYear(year)
    date.setDate(date.getDate()+dayofset)
    while (date.getDate() !== 1 && date.getDay()!== 1){
        date.setDate(date.getDate()-1)
    }
    console.log(date);
    let day = String(date.getDate()).padStart(2,'0')
    let moth = String(date.getMonth()+1).padStart(2,'0')
    let finalyear = String(date.getFullYear()).padStart(4,'0')
    return `${day}-${moth}-${finalyear}`  
}
console.log(firstDayWeek(52, '1000'));
