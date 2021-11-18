function isDoDoTaste(word) {
    const stack = [];

    for (let i = 0; i < word.length; i++) {
        const lastElement = stack[stack.length - 1];

        if (lastElement === word[i]) {
            stack.pop();
        } else {
            stack.push(word[i]);
        }
    }

    return stack.length === 0;
}

function solution(data) {
    const answer = data.reduce((acc, cur) => {
        if (isDoDoTaste(cur)) acc += 1;

        return acc;
    }, 0);

    // 정답 출력
    console.log(answer);
}


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
let cnt = 0;
const data = [];

rl.on("line", function (x) {
    if (!N) N = +x;
    else {
        cnt++;
        data.push(x);
    }

    if (cnt === N) rl.close();
}).on("close", function () {
    solution(data);
    process.exit();
});