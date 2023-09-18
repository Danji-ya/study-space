function solution(N, K) {
    const queue = Array.from({ length: N }, (v, i) => i + 1);
    const answer = [];

    while (queue.length > 0) {
        // k번째 상품뽑기
        for (let j = 1; j <= K; j++) {
            const frontEle = queue.shift();
            if (j === K) {
                answer.push(frontEle);
            } else {
                queue.push(frontEle);
            }
        }
    }

    console.log(answer.join(' '));
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const data = [];

rl.on("line", function (x) {
    data.push(...x.split(' ').map(e => +e));
    rl.close();
}).on("close", function () {
    solution(data[0], data[1]);
    process.exit();
});