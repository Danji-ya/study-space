function solution(n, k, data) {
    let [turnOn, turnOff] = [data[0], data[0] + 1];
    let termArr = [];
    let termCnt = 1;
    let answer = 0;
  
    for (let i = 1; i < data.length; i += 1) {
      let [nextTurnOn, nextTurnOff] = [data[i], data[i] + 1];
  
      // 연속적이지 않을 때,
      if (turnOff < nextTurnOn) {
        termArr.push(nextTurnOn - turnOff);
  
        termCnt += 1;
      }
  
      turnOn = nextTurnOn;
      turnOff = nextTurnOff;
    }
  
    // 오름차순
    termArr = termArr.sort((a, b) => a - b);
  
    // termCnt <= k 그냥 n
    // 아니면 텀이 가장 짧은 구간을 성냥을 아끼고 긴 구간에서 성냥쓰기
    if (termCnt > k) {
      for (let i = 0; i < termCnt - k; i += 1) {
        answer += termArr[i];
      }
    }
  
    console.log(answer + n);
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