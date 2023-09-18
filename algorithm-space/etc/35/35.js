function solution(n, r) {
    const elements = Array.from({ length: n }, (v, i) => String.fromCharCode(i + 97));
    const visited = Array(n).fill(0);

    function permutation(r, buf) {
        if (buf.length === r) return console.log(buf);

        for (let i = 0; i < elements.length; i++) {
            // 중복 방지
            if (!visited[i]) {
                visited[i] = true;

                permutation(r, buf + elements[i]);
                visited[i] = false;
            }
        }
    }

    permutation(r, '');
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const data = [];
rl.on("line", function (x) {
    data.push(...x.split(' ').map(el => +el));
    rl.close();
}).on("close", function () {
    solution(data[0], data[1]);
    process.exit();
});