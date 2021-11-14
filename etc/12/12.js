function solution(data) {
    let numList = '';

    for (let i = 1; i <= data; i++) {
        numList = numList.concat(i);
    }

    const index = numList.indexOf(`${data.toString()}`);

    console.log(index + 1);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(+input[0]);
