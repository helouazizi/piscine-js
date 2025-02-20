function dogYears(planet, dogAge) {
   
    switch (planet) {
        case "mercury":
            return year * 7 * 0.2408467;
        case "venus":
            return year * 7 * 0.61519726;
        case "mars":
            return year * 7 * 1.8808158;
        case "jupiter":
            return year * 7 * 11.862615;
        case "saturn":
            return year * 7 * 29.447498;
        case "uranus":
            return year * 7 * 84.016846;
        case "neptune":
            return year * 7 * 164.79132;
        case "earth":
            return year * 7 *1;
    }
}

