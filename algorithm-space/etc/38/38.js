function solution(data) {
    let answer = 1;
    
    // 끝나는 시간이 가장 빠른순이면서 같다면 빠르게 시작하는 순서
    data = data.sort((a,b) => a[1] - b[1] || a[0] - b[0]);
    
    
    let [start, end] = data[0];
    
    for(let i=1; i<data.length; i+=1){
        let [nextStart, nextEnd] = data[i];
        
        if(end <= nextStart){
            answer+=1;
            start = nextStart;
            end = nextEnd;
        }
    }
    
    console.log(answer);
}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
let cnt = 0;
const data = [];
rl.on("line", function (x) {
  if(!n) n = +x;
  else {
    data.push(x.split(' ').map(el => +el));
    cnt++;  
  }
  
  if(n === cnt) rl.close();
}).on("close", function () {
  solution(data);
  process.exit();
});