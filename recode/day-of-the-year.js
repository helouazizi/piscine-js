function dayOfTheYear(date) {
    const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1); // First day of the year in UTC
    const currentTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()); // Current date in UTC
    return Math.floor((currentTime - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
}

console.log(dayOfTheYear(new Date('0001-01-01')) === 1);     // ✅ True
console.log(dayOfTheYear(new Date('1664-08-09')) === 222);   // ✅ True
console.log(dayOfTheYear(new Date('1600-12-31')) === 366);   // ✅ True (Leap Year)
console.log(dayOfTheYear(new Date('2020-06-22')) === 174);   // ✅ True
console.log(dayOfTheYear(new Date('2048-12-08')) === 343);   // ✅ True (Leap Year)
console.log(dayOfTheYear(new Date('2048-11-08')) === 313);   // ✅ True (Leap Year)
