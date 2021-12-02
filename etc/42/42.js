function solution(n) {
    let prev = new Array(n+1).fill(0);
    let cur = new Array(n).fill(0);
    cur.unshift(1);
    
    for(let i=1; i<n+1; i+=1){
        prev = cur;
        
        cur = new Array(n+1).fill(0);
        
        for(let j=0; j<i; j+=1) cur[j] = prev[j];
        
        for(let j=i; j<n+1; j+=1) {
            cur[j] = (prev[j] + prev[j-i]) % 99999;
        }
        console.log('prev:',prev);
        console.log('cur:',cur);
    }
    console.log(cur[n]);
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