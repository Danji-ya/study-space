function solution(N, data) {
    const sortedArr = data.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let answer = 1;
    let [from, to] = sortedArr[0];
    for (let i = 1; i < sortedArr.length; i++) {
        const [nextFrom, nextTo] = sortedArr[i];

        if (to <= nextFrom) {
            answer++;
            from = nextFrom;
            to = nextTo;
        }
    }
    console.log(answer);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];

const data = [];
for (let i = 1; i <= N; i++) {
    data.push(input[i].split(' ').map(el => +el));
}

solution(N, data);
