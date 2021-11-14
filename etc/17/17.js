function solution(K) {
    const arr = [0, 1, 1];

    if (K === 1 || K === 2) return console.log(arr[K]);

    for (let i = 3; i <= K; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }

    return console.log(arr[K]);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(+input[0]);
