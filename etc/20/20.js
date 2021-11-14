function solution(N, data) {
    const A = [];
    const B = data;
    let curNum = 0;
    let sum = 0;

    
    B.map((sum,idx) => {
        curNum = sum * (idx+1) - sum;
        sum += curNum;
        
        A.push(curNum);
    });
    console.log(A.join(' ')); 
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
const data = [];
rl.on('line', function (line) {
    
    if(!N) N = +line;
    else {
        data.push(...line.split(' ').map((el) => +el));
        rl.close();
    }
}).on('close', function () {
    solution(N, data);
    process.exit();
});