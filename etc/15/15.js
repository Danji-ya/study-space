function gcd(a, b) {
    let r = b;

    while (a % b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }

    return r;
}

const solution = (N, data) => {
    for (let i = 1; i < N; i++) {
        const result = gcd(data[0], data[i]);

        console.log(`${data[0] / result}/${data[i] / result}`);
    }
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const data = [];
data.push(...input[1].split(' ').map(el => +el));

solution(N, data);
