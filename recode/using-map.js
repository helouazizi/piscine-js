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
    return arr.map(obj => {
        let temp  = fahrenheitToCelsius([obj.temperature])[0]
        return `${temp}elsius in ${upperCasingStates([obj.city])[0]}, ${upperCasingStates([obj.state])[0]}`
    })
}

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]));

