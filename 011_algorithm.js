function listAllValues(obj) {
  let arr = [];
  for (let i in obj) {
    arr.push(obj[i])
  }
  return arr;
}

let output = listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
});

console.log(output);