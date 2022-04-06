function solution(s) {
  const regEx = /[^0-9]/g;
  let answer = true;
  
  function isOnlyNumberString(str){
      return !regEx.test(str);
  }
  
  function isLimitLen(str) {
      const len = str.length;
      return len === 4 || len === 6;
  }
  
  answer = isOnlyNumberString(s) && isLimitLen(s);
  

  return answer;
}