function solution(fees, records) {
  let answer = [];
  const stayCars = {};
  const totalStayCars = {};
  const [defaultTime, defaultPrice, perMin, perMinPrice] = fees;
  
  function changeMin(time){
      const [hour, min] = time.split(':').map(el => +el);
      return hour * 60 + min;
  }
  
  function addTotalTime({carNum, diffTime}){
      if(!totalStayCars[carNum]) totalStayCars[carNum] = diffTime;
      else totalStayCars[carNum] += diffTime;
      
  }
  
      
  for(let i=0; i<records.length; i+=1){
      const [time, carNum, act] = records[i].split(' ');
      
      if(act === 'IN'){
          stayCars[carNum] = changeMin(time);
          continue;
      }
      
      const diffTime = changeMin(time) - stayCars[carNum];
      
      addTotalTime({carNum: carNum, diffTime: diffTime})
              
      stayCars[carNum] = -1;
  }
  
  // 다음 날 누적 정산
  Object.keys(stayCars).forEach(carNum => {
     const inTime = stayCars[carNum];
     if(inTime !== -1) {
         addTotalTime({carNum: carNum, diffTime: changeMin("23:59") - inTime})
         stayCars[carNum] = 0;
      }
      
      answer.push([carNum, totalStayCars[carNum]]);
  });

  
  answer = answer.sort((a,b) => {
      if(a[0] > b[0]) return 1;
      if(a[0] < b[0]) return -1;
      return 0;
  }).map(([_carNum, totalTime]) => {  
      if(totalTime <= defaultTime) return defaultPrice;
      
      const totalPrice = defaultPrice + Math.ceil((totalTime - defaultTime) / perMin) * perMinPrice;
      
      return totalPrice;
  })
  
  return answer;
}