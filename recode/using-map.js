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



console.log(upperCasingStates(['hhjdsjj jhjh','sdfsd jkj','sgsdg dsf']));

