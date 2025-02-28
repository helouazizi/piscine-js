function citiesOnly(arr){
    return arr.map(index => index['city'])
}
function upperCasingStates(arr){
    return arr.map(word =>word.split(' ').map(kalma =>kalma.charAt(0).toUpperCase()+ kalma.slice(1).toLowerCase()).join(' '))}

function fahrenheitToCelsius (arr){
    return arr.map(temp => {
        return Math.floor((parseFloat(temp)-32)*(5/9))+'°C'
    })
}

function trimTemp(arr){
    return arr.map(obj => ({
         ...obj,
         temperature : obj.temperature.replace(/\s+/g,'')
    }))
}

function tempForecasts(arr){
    return arr.map(obj => fahrenheitToCelsius([obj.temperature.replace(/\s+/g,'')])+'elsius'+' in '+ upperCasingStates([obj.city])+', '+upperCasingStates([obj.state]))
}

let text = ['alabama', 'new jersey']
console.log(upperCasingStates(text))
