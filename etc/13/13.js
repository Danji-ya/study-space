function solution(data) {
    const directory = {};
    const dataArr = data.split('').map(char => char.toString().toLowerCase());

    dataArr.map(char => {
        if (directory[char]) {
            directory[char] += 1;
        } else {
            directory[char] = 1;
        }
    });

    const sortedDir = Object.entries(directory).sort(([, a], [, b]) => b - a);

    if (sortedDir[0][1] === sortedDir[1][1]) return '?';
    return sortedDir[0][0].toUpperCase();
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(solution(input[0]));
