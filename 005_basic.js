function transformEmployeedData(array) {
    let arr =[];
    for (let i in array) {
        let obj = {};
        for (let j in array[i]){
            obj[array[i][j][0]] = array[i][j][1];            
        }
        arr.push(obj)
    }
    return arr;
}

let output = transformEmployeedData([
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
    [
      ['firstName', 'Mary'],
      ['lastName', 'Jenkins'],
      ['age', 36],
      ['role', 'manager']
    ]
  ]);

  console.log(output);