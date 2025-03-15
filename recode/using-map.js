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

function trimTemp(params) {
    
}


console.log(fahrenheitToCelsius(['5°F','55°F','58°F']));

