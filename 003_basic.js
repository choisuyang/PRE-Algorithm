function fromListToObject(array) {
    let obj = {};
    for (let i in array) {
        for (let j in array[i]) {
            obj[array[i][0]] = array[i][j]; 
        }
    }
    return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(output);