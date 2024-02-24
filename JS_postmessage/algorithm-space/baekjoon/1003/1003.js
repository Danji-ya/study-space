function solution(arr) {
    const fibonacci = new Array();
    const answer = [];
    fibonacci[0] = [1, 0];
    fibonacci[1] = [0, 1];

    const maxN = Math.max(...arr);

    for(let i=2; i<=maxN; i++){
        fibonacci[i] = [
            fibonacci[i-2][0] + fibonacci[i-1][0],
            fibonacci[i-2][1] + fibonacci[i-1][1],
        ]
    }
    
    for(let i=0; i<arr.length; i++){
        answer.push(fibonacci[arr[i]].join(' '));
    }

    console.log(answer.join('\n'));
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
      data.push(+x);
      cnt+=1;
  }
  if(n === cnt) rl.close();
}).on("close", function () {
  solution(data);
  process.exit();
});