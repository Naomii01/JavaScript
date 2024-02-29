let person = {
    name: 'Alice',
    age: 12,
    hobby: 'reading'
  };
  
  for (let property in person) {
    console.log(property + ': ' + person[property]);
  }
  