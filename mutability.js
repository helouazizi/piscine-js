
const clone1 = person
Object.freeze(clone1)
const clone2 = person
Object.freeze(clone2)
person.age++
person.country = "FR"
const samePerson = {
  name: 'Rick',
  age:person.age,
  country: person.country,
}
