function solution(N) {
    const arr = new Array(2 * N + 1).fill(true);
    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i <= 2 * N; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= 2 * N; j += i) {
                arr[j] = false;
            }
        }
    }
    console.log(
        arr.slice(N).reduce((acc, cur) => {
            if (cur) {
                acc++;
            }

            return acc;
        }, 0),
    );
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(+input[0]);
