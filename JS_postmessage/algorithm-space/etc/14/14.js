const solution = (N, data) => {
    let criminalPos = 1;

    const moveCriminalPos = arr => arr.filter(num => num !== criminalPos)[0];

    for (let i = 0; i < N; i++) {
        if (data[i].includes(criminalPos)) {
            criminalPos = moveCriminalPos(data[i]);
        }
    }

    console.log(criminalPos);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
    data.push(input[i].split(' ').map(el => +el));
}

solution(N, data);
