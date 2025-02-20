function dogYears(planet, dogAge) {
    const year = dogAge / 60 / 60 / 24 / 365.25
    switch (planet) {
        case "mercury":
            return (year * 7 * 0.2408467).toFixed(2);
        case "venus":
            return (year * 7 * 0.61519726).toFixed(2);
        case "mars":
            return (year * 7 * 1.8808158).toFixed(2);
        case "jupiter":
            return (year * 7 * 11.862615).toFixed(2);
        case "saturn":
            return (year * 7 * 29.447498).toFixed(2);
        case "uranus":
            return (year * 7 * 84.016846).toFixed(2);
        case "neptune":
            return (year * 7 * 164.79132).toFixed(2);
        case "earth":
            return (year * 7 *1).toFixed(2);
    }
}

