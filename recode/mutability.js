const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

  const clone1 =  {...person} 
  person.age++

  console.log(person,clone1)