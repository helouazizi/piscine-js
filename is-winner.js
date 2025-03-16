async function isWinner(countryName) {
    try {
        const country = await db.getWinner(countryName);
        const wins = await db.getResults(country.id);

        if (country.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }

        if (wins.length < 3) {
            return `${country.name} is not what we are looking for because of the number of times it was champion`;
        }

        const years = wins.map(win => win.year).join(', ');
        const results = wins.map(win => win.score).join(', ');

        return `${country.name} won the FIFA World Cup in ${years} winning by ${results}`;
    } catch (err) {
        if (err.message === "Country Not Found") {
            return `${countryName} never was a winner`;
        }
        throw err; // rethrow other errors
    }
}
