function dogYears(planet, dogAge) {
    const year = dogAge / 60 / 60 / 24 / 365.25
    switch (planet) {
        case "mercury":
            return Math.round((year * 7 * 0.2408467) * 100) / 100
        case "venus":
            return Math.round((year * 7 * 0.61519726) * 100) / 100
        case "mars":
            return Math.round((year * 7 * 1.8808158) * 100) / 100
        case "jupiter":
            return Math.round((year * 7 * 11.862615) * 100) / 100
        case "saturn":
            return Math.round((year * 7 * 29.447498) * 100) / 100
        case "uranus":
            return Math.round((year * 7 * 84.016846) * 100) / 100
        case "neptune":
            return Math.round((year * 7 * 164.79132) * 100) / 100
        case "earth":
            return Math.round((year * 7 * 1) * 100) / 100
    }
}

