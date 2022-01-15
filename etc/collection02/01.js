function solution(R, N) {
    // nHr === n+r-1Cr
    const [n, r] = [N+R-1, R];
    
    const dp = Array.from({length: 201}, (v,i) => new Array(201).fill(0));
    
    function nCr(n,r){
        // 기존의 계산된 값을 이용
        if(dp[n][r] !== 0) return dp[n][r];
        // nCr의 n === r 은 1
        // nCr의 r이 0 은 1
        if( n === r || r === 0) return 1;
        
        dp[n][r] = (nCr(n-1, r-1) + nCr(n-1, r)) % 1000000007;
        
        return dp[n][r];
    }
    console.log(nCr(n,r) % 1000000007)
}




const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N, K = null;
rl.on("line", function (x) {
  [N, K] = x.split(' ').map(el => +el);
  rl.close();
}).on("close", function () {
  solution(N, K);
  process.exit();
})
