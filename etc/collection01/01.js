const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const data = [];
rl.on('line', function (line) {
    data.push(...line.split(''));
    rl.close();
}).on('close', function () {
    solution(data);
    process.exit();
});

// 각 치타의 시작점과 도착점 사이에 있는 치타들의 수만 체크해주면 해결할 수 있는 문제이다.
function solution(str) {
    const stack = [];
    let result = 0;
    
    str.forEach(char => {
        if(stack.includes(char)){
            // 방금 돌아온 치타와 이 치타가 시작 사이에 들어온 치타의 수를 더해준다.
            const curCharStartIdx = stack.indexOf(char);
            result += stack.length - (curCharStartIdx + 1);
            
            // 그리고 더이상 이 치타는 계산할 필요가 없기 때문에 스택에서 제거
            stack.splice(curCharStartIdx, 1);
            return;
        }   
        stack.push(char);
    });
    console.log(result);
}