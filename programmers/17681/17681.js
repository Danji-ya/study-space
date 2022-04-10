function solution(n, arr1, arr2) {
  let answer = [];

  function decToBinary(num){
      const padString = '0'.repeat(n);       
      return (padString  + num.toString(2)).slice(-n);
  }
      
  for(let i=0; i<n; i+=1){
      const firstMapRow = decToBinary(arr1[i]);
      const secondMapRow = decToBinary(arr2[i]);
      let row = '';
      
      for(let j=0; j<n; j+=1){
          const firstMapCol = firstMapRow[j];
          const secondMapCol = secondMapRow[j];
          
          if(firstMapCol === '1' || secondMapCol === '1'){
              row+='#';
              continue;
          }
          row+=' ';
      }
      answer.push(row);
  }
  

  return answer;  
}