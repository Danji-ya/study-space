/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const myMap = new Map();
  const answer = [];
  
  for(let i=0; i<nums.length; i+=1){
      const firstNum = nums[i];
      const secondNum = target - firstNum;
      
      // 있다면 정답
      if(myMap.has(secondNum)){
          const idx = myMap.get(secondNum);
          answer.push(i,idx);
          break;
      }
      
      myMap.set(firstNum, i);
  }
  return answer;
};