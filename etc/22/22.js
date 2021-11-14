function solution(nickName, N, data) {
    const word = nickName;
    let cnt = 0;

    data.map(str => {
        for (let i = 0; i < str.length; i++) {
            const newStr = str.slice(i) + str.slice(0, i);

            if (newStr.includes(word)) {
                cnt++;
                break;
            }
        }
    });

    console.log(cnt);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nickName = null;
let N = null;
let cnt = 0;
const data = [];
rl.on('line', function (line) {
    if (!nickName) nickName = line;

    if (!N) N = +line;
    else {
        data.push(line);
        cnt++;
    }

    if (N === cnt) rl.close();
}).on('close', function () {
    solution(nickName, N, data);
    process.exit();
});
