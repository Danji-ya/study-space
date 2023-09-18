function solution(data) {
    const uniqueArr = new Set([]);

    const nMultiple = n => {
        for (let i = n; i < data; i += n) {
            if (i % n === 0) uniqueArr.add(i);
        }
    };

    nMultiple(3);
    nMultiple(5);

    return [...uniqueArr].reduce((acc, cur) => (acc += cur), 0);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(solution(+input[0]));
