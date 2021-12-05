// dp[i][j] -> j 이하의 수를 사용하여 i를 표현할 수 있는 경우의 수

function solution(n) {
  const dp = Array.from({length: n+1}, (v, i) => Array(n+1).fill(0));
  
  // 0을 표현할 수 있는 경우는 0밖에 없기 때문에
  for(let i=0; i<=n; i+=1) dp[0][i] = 1;
  
  for(let i=1; i<=n; i+=1){
      for(let j=1; j<=n; j+=1){
          // 만들려는 수보다 큰 숫자를 이용하는 경우는 없기 때문에
          // i=3, j=4 -> 1+2, 0+3, 4를 이용해서 3을 만들수는 없음.
          if(j > i){
              dp[i][j] = dp[i][j-1];
              continue;
          }

          // i를 이용한 경우의 수와 i를 이용하지 않은 경우의 수
          // i=4일 경우, 1개(0+4) + 1개(1+3)
          dp[i][j] += (dp[i][j-1] + dp[i-j][j-1]) % 99999;
      }
  }

  console.log(dp[n][n]);
}

// function solution(n) {
//     let prev = new Array(n+1).fill(0);
//     let cur = new Array(n).fill(0);
//     cur.unshift(1);
    
//     for(let i=1; i<n+1; i+=1){
//         prev = cur;
        
//         cur = new Array(n+1).fill(0);
        
//         for(let j=0; j<i; j+=1) cur[j] = prev[j];
        
//         for(let j=i; j<n+1; j+=1) {
//             cur[j] = (prev[j] + prev[j-i]) % 99999;
//         }
//         console.log('prev:',prev);
//         console.log('cur:',cur);
//     }
//     console.log(cur[n]);
// }


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
rl.on("line", function (x) {
  n = +x;
  rl.close();
}).on("close", function () {
  solution(n);
  process.exit();
});