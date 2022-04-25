const regExp1 = /나는 (.*)입니다/;
const tests = ["나는 바보입니다", "나는 개입니다", "나는 새입니다", '상관없는 패턴'];
const list = [];

tests.forEach(test => {
  const matchedGroup = test.match(regExp1);
  if(!matchedGroup) return;
  list.push(matchedGroup[1]);
});
console.log(list);
// (3) ['바보', '개', '새']

const regExp2 = /html$/;
const files = ['index.html', 'index.js', 'index.svg','1q2w3e.html'];
const htmlFiles = [];
files.forEach(file => {
  if(file.match(regExp2)) htmlFiles.push(file);
});
console.log(htmlFiles);
// (2) ['index.html', '1q2w3e.html']


function isValidPhonePattern(str) {
  const regPhone = /^01([0|1|6|7|8|9])-?(\d{3,4})-?(\d{4})$/;
  return regPhone.test(str);
}

console.log(isValidPhonePattern('010-1234-5678')); // true
console.log(isValidPhonePattern('0150-1234-5678')); // false
console.log(isValidPhonePattern('010-1234-568')); // false