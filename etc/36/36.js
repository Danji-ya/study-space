function solution(D, P) {
    let answer = -1;

    function calc(cnt = 0, value = 1, startNum = 9) {
        if (String(value).length > D) return;

        if (cnt === P) {
            answer = value > answer ? value : answer;
            return;
        }

        for (let i = startNum; i > 1; i -= 1) {
            calc(cnt + 1, value * i, i);
        }
    }

    calc();
    console.log(answer);
}




const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let D = 0;
let P = 0;
rl.on("line", function (x) {
    [D, P] = x.split(' ').map(el => +el);
    rl.close();
}).on("close", function () {
    solution(D, P);
    process.exit();
});
