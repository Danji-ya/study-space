function solution(n) {
    const dp = new Array(n+1).fill(0);
    let answer = -1;
    dp[3] = 1;
    dp[5] = 1;

    // dp에는 i 값일 때 최소한의 갯수를 저장
    for(let i=6; i<=n; i+=1){
        if(i % 5 === 0){
            dp[i] = dp[i-5] + 1;
        } else if(i % 3 === 0){
            dp[i] = dp[i-3] + 1;
        } else {
            // 둘다 나눠지는 수가 아니면 8같은..
            if(dp[i-5] !== 0 && dp[i-3] !== 0){
                dp[i] = Math.min(dp[i-5], dp[i-3]) + 1;
            }
        }
    }
    
    answer = dp[n] === 0 ? answer : dp[n];
    console.log(answer);
}

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