function citiesOnly(arr){
    return arr.map(index => index['city'])
}
function upperCasingStates(arr){
    return arr.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        });
       // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}

function fahrenheitToCelsius (arr){
    return arr.map(temp => {
        return Math.round((parseFloat(temp)-32)*(5/9))+'°C'
    })
}

function trimTemp(arr){
    return arr.map(obj => ({
         ...obj,

         temperature : obj.temperature.replace(/\s+/g,'')
    }))
}

function tempForecasts(arr){
    return arr.map(obj => obj.temperature.replace(/\s+/g,'')+'Celsius'+' in '+ obj.city+', '+obj.state)
}
let test =[
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]
  console.log(tempForecasts(test))