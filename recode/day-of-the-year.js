function dayOfTheYear(date) {
    const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1); // First day of the year in UTC
    const currentTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()); // Current date in UTC
    return Math.floor((currentTime - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
}


