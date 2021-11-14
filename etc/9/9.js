const solution = (N, S, data) => {
    const sum = [0];
    let minCnt = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= N; i++) {
        sum[i] = sum[i - 1] + data[i - 1];
    }
    console.log(sum);

    for (let i = 1; i <= N; i++) {
        let cnt = 0;
        let tempSum = 0;
        for (let j = i; j <= N; j++) {
            cnt++;
            tempSum = sum[j] - sum[i - 1];
            if (S <= sum[j] - sum[i - 1]) break;
        }

        if (cnt < minCnt && tempSum >= S) minCnt = cnt;
    }
    console.log(minCnt);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0].split(' ')[0];
const S = +input[0].split(' ')[1];
const data = [];
data.push(...input[1].split(' ').map(el => +el));

solution(N, S, data);
