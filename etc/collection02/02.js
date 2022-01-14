function solution(n){
    const dp = new Array(21).fill(0);
    dp[2] = 1;
    // 완전순열, 교란수열(참고 블로그)
    // https://j1w2k3.tistory.com/667
    for(let i=3; i<=n; i+=1){
        dp[i] = ((i-1)*(dp[i-1] + dp[i-2])) % 10007;
    } 
    console.log(dp[n]);
}



const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
rl.on("line", function (x) {
  n = +x;
  rl.close();
}).on("close", function () {
  solution(n);
  process.exit();
})