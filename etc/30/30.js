function solution(str) {

    const stack = [];
    let answer = 'YES';


    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '(') stack.push(char);
        else {
            // defence
            const attack = stack.pop();
            if (!attack) {
                answer = 'NO';
                break;
            }
        }
    }

    if (stack.length > 0) answer = 'NO';

    console.log(answer);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = '';

rl.on("line", function (x) {
    data = x;
    rl.close();
}).on("close", function () {
    solution(data);
    process.exit();
});