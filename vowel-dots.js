function vowelDots(s){
   return s.replace(vowels,'$&.')
}
let vowels = /[aeiou]/gi


console.log(vowelDots("hassan is the best jj u   jnj"))