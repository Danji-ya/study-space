function solution(h) {
    let answer = 0;

    // ^형태이기 때문에 그 전의 높이의 마을 갯수가 최소한의 마차를 보낸 수
    // 루트마을 제외 h번째 높이의 마을 갯수 2^h
    for(let i=1-h%2; i<h; i+=2){
        answer+= Math.pow(2,i);
    }


    // 짝수일때는 루트마을이 존재하기 때문에
    if(h%2 === 0) answer+=1;
    
    console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let h = null;
const data = [];
rl.on("line", function (x) {
  h = +x;
  rl.close();
}).on("close", function () {
  solution(h);
  process.exit();
});