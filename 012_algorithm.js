function sumDigits(num) {
  let str = num.toString();
  if (num >= 0) {
    return str.split('').reduce((acc, curr) => acc + +curr,0);
  } else {
    return str.split('').splice(2).reduce((acc, curr) => acc + +curr, -str[1]);
  }
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4