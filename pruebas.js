function getNames(array) {
    const names=[]
    for (let i=0; i < array.length; i++) { 
        console.log(array[i])
       names.push(array[i].name)
    }
    return names
  }

  const datos=[
    
        {
         "name": "Nicolas",
         "lastName": "Molina",
         "age": 28
        },
        {
         "name": "Valentina",
         "lastName": "Molina",
         "age": 19
        }
       
  ]


  getNames(datos)

  datos.length