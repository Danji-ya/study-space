/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let answer = false;    
  const numsLen = nums.length;
  const mySet = new Set();
  
  for(let i=0; i<numsLen; i+=1){
      const curNum = nums[i];
      
      if(mySet.has(curNum)){
          answer = true;
          break;
      }
      
      mySet.add(curNum);
  }
  
  
  return answer;
};