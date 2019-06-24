function computeSquareRoot(num) {
  for (let i = 1; i < num; i++) {
    if (i * i === num) {
      return i;
    }
  }
}

var output = computeSquareRoot(9);
console.log(output); // --> 3