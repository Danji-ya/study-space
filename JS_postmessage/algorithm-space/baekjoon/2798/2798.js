const solution = (N, M, data) => {
    const getCombination = (arr, cnt) => {
        if (cnt === 1) return arr.map(el => [el]);
        const result = [];

        arr.map((firstNum, idx, ori) => {
            const restArr = ori.slice(idx + 1);
            const combination = getCombination(restArr, cnt - 1);
            const attachCombination = combination.map(el => [firstNum, ...el]);

            result.push(...attachCombination);
        });
        return result;
    };

    const result = getCombination(data, 3)
        .map(combination => combination.reduce((acc, cur) => (acc += cur), 0))
        .sort((a, b) => b - a)
        .filter(sum => sum <= M);
    console.log(result[0]);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(el => +el);
const data = [];

data.push(...input[1].split(' ').map(el => +el));

solution(N, M, data);
