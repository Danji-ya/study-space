function solution(N, data) {
    const sum = data.reduce((acc, cur) => (acc += cur), 0);

    const pw = sum.toString().split('').slice(0, 11).join('');

    console.log(pw.replace('.', ''));
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
        data.push(+line);
        cnt++;
    }

    if (N === cnt) rl.close();
}).on('close', function () {
    solution(N, data);
    process.exit();
});
