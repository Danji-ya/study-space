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

const MAX_N = 10000;
const lis = Array.from({length: MAX_N});

function bs(startIdx, endIdx, target) {
    while(startIdx < endIdx){
        const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
        if(lis[midIdx] < target){
            startIdx = midIdx + 1;
        } else {
            endIdx = midIdx;
        }
    }
    
    return endIdx;
}



function solution(n, arr) {
    let answer = 0;
    // start
    let j = 0;
    lis[0] = arr[0];
    
    for(let i=1; i<n; i+=1){
        // 증가하는 값일때는 그냥 넣는다.
        if(lis[j] < arr[i]){
            lis[++j] = arr[i];
        } 
        
        // 바꿔야 할 위치를 얻어온다.
        // 바꾼다는건 해당 값은 최장 증가수열에 포함되지 않는 값이기 때문에 옮겨야 하는 값이다.
        else {
            const idx = bs(0, j, arr[i]);
            lis[idx] = arr[i];
            answer+=1;
        }
    }
    console.log(answer);
}

// LIS 알고리즘으로 가장 긴 증가 수열을 찾으면
// 남은 수들이 최소로 옮기는 갯수가 된다.