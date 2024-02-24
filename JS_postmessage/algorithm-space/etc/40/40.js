// 1: 1
// 2: 1 1, 2
// 3: 1 1 1, 1 2, 2 1, 3
// 4: 1 1 1 1 , 1 1 2 * 3, 2 2, 1 3 * 2
// 5: 1 1 1 1 1, 1 1 1 2 * 4, 1 1 3 * 3, 1 2 2 * 3, 3 2 * 2
function solution(n) {
    const dp = [1, 2, 4];

    for (let i = 3; i < n; i += 1) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 123456;
    }

    console.log(dp[n - 1]);
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