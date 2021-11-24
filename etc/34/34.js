function bs(arr, m) {
    let startIdx = 0;
    let lastIdx = arr.length - 1;
    let findIdx = -1;

    while (startIdx <= lastIdx) {
        const midIdx = startIdx + (Math.floor((lastIdx - startIdx) / 2));

        if (arr[midIdx] === m) {
            findIdx = midIdx;
            break;
        }


        if (arr[midIdx] < m) {
            startIdx = midIdx + 1;
        } else {
            lastIdx = midIdx - 1;
        }
    }
    return findIdx;
}


function solution(n, arr, m) {
    const answer = bs(arr, m) === -1 ? 'No' : 'Yes';

    console.log(answer);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = null;
const data = [];
let m = null;

rl.on("line", function (x) {
    if (!n) n = +x;
    else if (data.length === 0) {
        data.push(...x.split(' ').map(el => +el));
    } else {
        m = +x;
        rl.close();
    }
}).on("close", function () {
    solution(n, data, m);
    process.exit();
});