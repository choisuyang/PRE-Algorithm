function isOddWithoutModulo(num) {
  let a = Math.floor(num / 2);
  if ((num - (a * 2)) !== 0 ){
    return true;
  }
  return false
}

var output = isOddWithoutModulo(17);
console.log(output); // --> true