const solution = (data) => {
    const sortedData = data.sort((a, b) => a.length - b.length);

    const regExp = new RegExp(sortedData[0], 'gi');

    const result = sortedData[1].match(regExp);
    console.log(sortedData[1] === result?.join(''));
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
    data.push(input[i]);
}
solution(data);
