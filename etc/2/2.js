const solution = data => {
    const answer = [];
    let sum = 0;
    data.map((num, idx) => {
        const x = (idx + 1) * num - sum;
        sum += x;
        return answer.push(x);
    });

    console.log(answer);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const data = [];
data.push(input[0].split(' ').map(el => +el));
solution(data[0]);
