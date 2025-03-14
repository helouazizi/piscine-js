function countLeapYears(date) {
    let year = date.getFullYear()
    let count = 0
    for (let i = 1 ; i < year ; i++){
        if ((i % 4 === 0 && i % 100 !== 0 ) || i%400 === 0){
            count++
        }
    }
    return count
}
console.log(countLeapYears(new Date('1664-08-09')));
