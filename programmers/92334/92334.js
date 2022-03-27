function solution(id_list, report, k) {
  const answer = Array.from({length: id_list.length}, (a,v) => 0);
  const recordList = id_list.reduce((a, v) => ({ ...a, [v]: new Set()}),{});
  const keys = Object.keys(recordList);
  
  
  for(let i=0; i<report.length; i+=1){
      const [user, badUser] = report[i].split(' ');
      
      recordList[user].add(badUser);
  }
  
  
  const countedList = keys
      .reduce((acc, user) =>{
          const badUsers = [...recordList[user]];
      
          for(let i=0; i<badUsers.length; i+=1){
              const badUser = badUsers[i];
              
              if(!acc[badUser]) acc[badUser] = 0;
              acc[badUser]+=1;
          }
          return acc;
      },{});
  
  
  for(let i=0; i<keys.length; i+=1){ 
      const badUsers = [...recordList[keys[i]]];
      
      for(let j=0; j<badUsers.length; j+=1){
          const badUser = badUsers[j];

          if(countedList[badUser] >= k){
              answer[i] +=1;
          }
      }
  }
  
  return answer;
}