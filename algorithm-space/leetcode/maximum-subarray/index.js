/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const numsLen = nums.length;
  
  for(let i=1; i<numsLen; i+=1){     
      nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
  }
  
  return Math.max(...nums);
   
};

// 실패코드
// var maxSubArray = function(nums) {
//     let max = nums[0];
//     const numsLen = nums.length;
//     for(let i=1; i<=numsLen; i+=1){     
//         for(let j=0; j<numsLen; j+=1){
//             const restArr = nums.slice(j, j+i);
//             max = Math.max(max, add(restArr));
//         }
//     }  
//     function add(arr){
//         return arr.reduce((acc, cur) => acc+=cur,0);
//     }
//     return max;
// };