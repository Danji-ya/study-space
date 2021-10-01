function solution(N, K, data) {
    let moneyArr = data.filter(num => num <= K);
    moneyArr = moneyArr.sort((a, b) => b - a);
    let result = 0;

    for (let i = 0; i < moneyArr.length; i++) {
        const cnt = Math.floor(K / moneyArr[i]);
        K -= cnt * moneyArr[i];
        result += cnt;

        if (K === 0) break;
    }

    console.log(result);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ').map(el => +el);

const data = [];
for (let i = 1; i <= N; i++) {
    data.push(+input[i]);
}

solution(N, K, data);
