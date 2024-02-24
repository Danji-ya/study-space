function solution(n, arr){
    const answer = [];
    const stack = [];

    for(let i=1; i<=arr.length; i+=1){
        const curTowerHeight = arr[i-1];
        
        // 앞에 존재하는 타워 중 가장 먼저 수신 가능한 탑을 찾기 위함
        while(stack.length !== 0){
            const [idx, top] = stack.pop();
            // 현재 타워보다 크거나 같다면 수신 가능
            if(top >= curTowerHeight){
                answer.push(idx);
                stack.push([idx, top]);
                break;
            }
        }
        
        // 현재 stack이 비워진것은 앞에서 수신해줄수 있는 탑이 없음
        if(stack.length === 0) answer.push(0);
   
        
        stack.push([i, curTowerHeight]);
    }
    console.log(answer.join(' '));
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = null;
const data = [];
rl.on('line', function (line) {
    if(!n) return n = +line; 
    data.push(...line.split(' ').map(el => +el));
    rl.close();
}).on('close', function () {
    solution(n, data);
    process.exit();
});