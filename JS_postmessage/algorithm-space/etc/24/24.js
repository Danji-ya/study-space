function solution(N, data) {
    let curPos = 1;

    for (let i = 0; i < data.length; i++) {
        if (data[i].includes(curPos)) {
            curPos = data[i][0] === curPos ? data[i][1] : data[i][0];
        }
    }
    console.log(curPos);
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
