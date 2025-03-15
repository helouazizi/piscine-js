function dayOfTheYear(date) {
    const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1); 
    const currentTime = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()); 
    return Math.floor((currentTime - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
}


