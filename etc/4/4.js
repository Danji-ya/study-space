const solution = (N, data) => {
    let bottlePrice = data.slice(0, 3);
    let capPrice = data.slice(3);

    bottlePrice = bottlePrice.sort((a, b) => a - b);
    capPrice = capPrice.sort((a, b) => a - b);

    console.log('minimum price', bottlePrice[0] + capPrice[0] + 10);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
    data.push(+input[i]);
}

solution(N, data);
