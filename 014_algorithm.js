function modulo(num1, num2) {
  let res = Math.trunc(num1 / num2);
  return num1 - (num2 * res);
}

var output = modulo(25, 4);
console.log(output); // --> 1