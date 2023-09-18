const solution = (N, data) => {
    const sortedArr = data.sort((a, b) => a - b);

    let answer = 0;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += sortedArr[i];
        answer += sum;
    }

    console.log(answer);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];

const data = [];

data.push(...input[1].split(' ').map(el => +el));

solution(N, data);
