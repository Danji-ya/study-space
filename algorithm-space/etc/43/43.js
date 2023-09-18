// 회의 참석
function solution(n, m, arr) {

    arr.sort((a,b) => a[1] - b[1] || a[0] - b[0]);
    let [start, end] = arr[0];
    let cnt = 1;
    
    for(let i=1; i<arr.length; i+=1){
        const [nextSt, nextEnd] = arr[i];
        
        if(end <= nextSt){
            [start, end] = arr[i];
            cnt+=1;
        }
        
        if(cnt === m) break;
    }

    console.log(end);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
let m = null;
let cnt = 0;
const data = [];
rl.on("line", function (x) {
  if(!n) [n, m] = x.split(' ').map(el => +el);
  else {
    data.push(x.split(' ').map(el => +el));
    cnt++;
  }
  if(n=== cnt) rl.close();
}).on("close", function () {
  solution(n, m, data);
  process.exit();
});

// 절약 정신
function solution(n, k, arr) {
    let answer = 0;
    const diffList = [];
    
    for(let i=0; i<arr.length-1; i+=1){
        diffList.push(arr[i+1] - arr[i] - 1);
    }
    
    diffList.sort((a,b) => a-b);
    
    for(let i=0; i<n-k-1; i+=1) {
        answer+=diffList[i];
    }
    
    console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n,
  k = null;
let cnt = 0;
const data = [];
rl.on("line", function (x) {
  if (!n) [n, k] = x.split(" ").map((el) => +el);
  else {
    data.push(+x);
    cnt++;
  }

  if (n === cnt) rl.close();
}).on("close", function () {
  solution(n, k, data);
  process.exit();
});

// 1,2,3,4,5,6 합
function solution(n) {
    const dp = [0, 1, 2, 4, 8, 16, 32];
    
    for(let i=7; i<=n; i++){
        dp[i] = (dp[i-6] + dp[i-5] + dp[i-4] + dp[i-3] + dp[i-2] + dp[i-1]) % 123456;
    }
    
    console.log(dp[n]);
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