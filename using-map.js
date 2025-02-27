function citiesOnly(arr){
    return arr.map(index => index['city'])
}

let test =[
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]

  console.log(citiesOnly(test))