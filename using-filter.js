// function filterShortStateName(arr){
//     return arr.filter(elm => elm.length < 7)
// }

// function filterStartVowel(arr){
//     return arr.filter(kalma => /^[auoieAUOIE]/.test(kalma))
// }
// function filter5Vowels(arr){
//     return arr.filter(kalma =>kalma.match(/[auoie]/g || []).length >= 5)
// }
// function filter1DistinctVowel(arr){
//     return arr.filter(kalma => {
//         let vowls = [...kalma.toLowerCase()].filter(char => 'auieo'.includes(char))
//         return new Set(vowls).size === 1
//     })
// }

function multiFilter(arr) {
    return arr.filter(obj => {
        return obj.capital.length >= 8 &&                // capital has at least 8 characters
               !/^[aeiou]/i.test(obj.name) &&            // name does NOT start with a vowel
               (obj.tag.match(/[aeiou]/gi) ?? []).length >= 1 &&  // tag contains at least one vowel
               obj.region !== "South";                   // region is not "South"
    });
}


const words = ['spray', 'elite', 'exuberanat', 'destruction', 'present'];
console.log(filter1DistinctVowel(words))