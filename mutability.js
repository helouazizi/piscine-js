
const clone1 = person
const clone2 = clone1
const samePerson = person
person.age++
person.country = "FR"
samePerson.country = person.country
samePerson.age = person.age

