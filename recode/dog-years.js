function dogYears(planet, dogAge) {
    let day = dogAge / 60 / 60 / 24 / 365.25
    switch (planet) {
        case 'mercury':
            return ((day * 7) / 0.2408467).toFixed(2) * 1
        case 'venus':
            return ((day * 7) /0.61519726 ).toFixed(2) * 1
        case 'mars':
            return ((day * 7) / 1.8808158).toFixed(2) * 1
        case 'jupiter':
            return ((day * 7) /  11.862615).toFixed(2) * 1
        case 'saturn':
            return ((day * 7) / 29.447498).toFixed(2) * 1
        case 'uranus':
            return ((day * 7) / 84.016846).toFixed(2) * 1
        case 'neptune':
            return ((day * 7) / 164.79132).toFixed(2) * 1
        default:
            return (day * 7).toFixed(2) * 1
    }

    //return day
}
console.log(dogYears("dsf", 1000000000))