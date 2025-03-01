function hasCity(country,arr){
    // if (!Array.isArray(arr)){
    //     arr = [arr]
    // }
    return function(city){
        return  arr.includes(city) ? `${city} is a city from ${country}` :  `${city} is not a city from ${country}`
    
    }
}
// function hasCity(country, cities) {
//     return function(city) {
//         return cities.includes(city) 
//             ? `${city} is a city from ${country}` 
//             : `${city} is not a city from ${country}`;
//     };
// }