function getIndexOf(char, str) {
  if (!str.includes(char)) {
    return -1;
  }
  for (let i in str) {
    if (str[i] === char) {
      return Number(i);
      // 또는 +i (+를 붙이면 숫자처럼 표현이 된다.)
    }
  }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2