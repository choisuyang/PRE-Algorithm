function multiplyBetween(num1, num2) {
  if (num1 >= num2) return 0;
  let mul = 1;
  for (let i = num1; i < num2; i++) {
    mul *= i;
  }
  return mul;  
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24