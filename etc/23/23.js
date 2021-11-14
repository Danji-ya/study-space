function solution(N, data) {
    const arr = [];

    for (let i = 0; i < data.length; i++) {
        let rank = 1;

        for (let j = 0; j < data.length; j++) {
            const [curMath, curSci] = data[i];
            const [compareMath, compareSci] = data[j];

            if (curMath < compareMath && curSci < compareSci) rank++;
        }
        arr.push(rank);
    }
    console.log(arr.join(' '));
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
let cnt = 0;
const data = [];
rl.on('line', function (line) {
    if (!N) N = +line;
    else {
        data.push(line.split(' ').map(el => +el));
        cnt++;
    }

    if (N === cnt) rl.close();
}).on('close', function () {
    solution(N, data);
    process.exit();
});
