function solution(n, k) {
  var answer = -1;
  const list = n.toString(k).split('0');
  const listToNumber = list.reduce((acc, cur) => {
     if(cur !== '' && cur !== '1') acc.push(+cur);
     return acc;
  },[]);
  
  function isPrime(n){
      const maxCompareN = Math.sqrt(n);

      for(let i=2; i<=maxCompareN; i+=1){
          if(n % i === 0) return false;
      }

      return true;
  }
  
  answer = listToNumber.reduce((acc,cur) =>{
      if(isPrime(cur)) acc+=1;
      return acc;
  } ,0);
  
  return answer;
}