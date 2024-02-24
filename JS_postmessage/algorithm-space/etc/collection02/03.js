function solution(n, k, items){
    const dp = Array.from({length: n+1}, (v,i) => new Array(k+1).fill(0));

    // 아이템을 쪼갤 수 없기 때문에 dp로 해결
    for(let i=1; i<=n; i+=1){
        const [weight, value] = items[i-1];
        
        for(let j=1; j<=k; j+=1){
            
            // 무게보다 크다면 챙길수가 없다.
            if(weight > j){
                dp[i][j] = dp[i-1][j];
            } else {
                // i번째 물건을 가져갈 경우, 안가져갈 경우
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight] + value);
            }
        }
    }
    console.log(dp[n][k]);
}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, k = null;
let cnt = 0;
const data = [];
rl.on("line", function (x) {
  if(!n) return [n, k] = x.split(' ').map(el => +el);
  data.push(x.split(' ').map(el => +el));
  cnt++;
  if(cnt == n) rl.close();
}).on("close", function () {
  solution(n, k, data);
  process.exit();
})
