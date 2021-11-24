const MAX_VALUE = BigInt(1000000007);

function limitMaxValue(value) {
    return value % MAX_VALUE;
}

function power(base, exp) {
    if (exp === 0n) return 1n;

    if (exp % 2n === 0n) {
        let re = power(base, exp / 2n);

        return limitMaxValue(re * re);
    } else {
        let re = power(base, (exp - 1n) / 2n);

        return limitMaxValue(limitMaxValue(re * re) * base);
    }
}

function solution(m, n) {
    console.log(Number(power(m, n)));
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let m = 0;
let n = 0;


rl.on("line", function (x) {
    [m, n] = x.split(' ').map(el => BigInt(el));
    rl.close();
}).on("close", function () {
    solution(m, n);
    process.exit();
});