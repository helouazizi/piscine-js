function matchCron(patern, date) {
    const [min, hour, datee, month, day] = patern.split(' ');

    const parse = (val) => val === '*' ? '*' : parseInt(val, 10);

    const cronvalues = [
        parse(min),
        parse(hour),
        parse(datee),
        parse(month),
        parse(day),
    ];

    const datevalues = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay() === 0 ? 7 : date.getDay(),
    ];
    return cronvalues.every((val, i) => val === '*' || val === datevalues[i]);
}
