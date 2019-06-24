function convertDoubleSpaceToSingle(str) {
  let sp = str.split('  ');
  return sp.join(' ');
}

var output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"