function citiesOnly(arr) {
    return arr.map(obj => obj['city'])
}

function upperCasingStates(arr) {
   return arr.map(word => {
       return word.split(' ').map(singl => {
            return singl.charAt(0).toUpperCase() + singl.slice(1).toLowerCase()
        }).join(' ')
    })
}

function fahrenheitToCelsius(arr) {
    return arr.map(degre => {
        return Math.floor((parseFloat(degre)-32)* 5 / 9)+'°C'
    })
}

function trimTemp(arr) {
    return arr.map(obj => ({
        ...obj,
        temperature : obj.temperature.replace(/\s+/g,'')
    }))
}

function tempForecasts(arr) {
    
}

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]));

