const solution = (none, info, data) => {
    const [N, T] = info;
    let sum = 0;
    let answer = 0;
    const isMaxOrder = value => T < sum + value;

    for (let i = 0; i < N; i += 1) {
        if (isMaxOrder(data[i])) break;
        sum += data[i];
        answer += 1;
    }

    console.log(answer);
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
let info = null;
let count = 0;
const data = [];

rl.on('line', function (line) {
    if (!N) {
        N = +line;
    } else if (!info) {
        info = line.split(' ').map(el => +el);
    } else {
        data.push(line.split(' ').map(el => +el));
        count += 1;
    }
    if (count === N) {
        rl.close();
    }
}).on('close', function () {
    solution(N, info, data[0]);
    process.exit();
});
