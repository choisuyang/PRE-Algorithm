function convertObjectToList(obj) {
    let fistArr=[];
    for(let i in obj) {
        let secondArr=[];
        secondArr.push(i)
        secondArr.push(obj[i])
        fistArr.push(secondArr);
    }
return fistArr;
}


let output = convertObjectToList({
    name: 'Holly',
    age: 35,
    role: 'producer'
    });

console.log(output);