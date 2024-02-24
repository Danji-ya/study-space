/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const numsLen = nums.length;
  
  const arr = Array(numsLen);
  
  // start
  arr[0] = 1;
  // left -> right
  for(let i= 1; i<numsLen; i+=1){
      arr[i] = arr[i-1] * nums[i-1];
  }
  
  
  let right = 1;
  for(let i=numsLen-1; i>=0; i-=1){
      arr[i] *= right;
      right *= nums[i];
  }
  
  return arr;
};