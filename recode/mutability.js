// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   }
  const clone1 =  {...person} 
  const clone2 = {...person}
  const samePerson = person
  person.age++
  person.country = 'FR'

  //console.log(person,clone1,samePerson)