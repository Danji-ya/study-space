const solution = (N, data) => {
    const dp = new Array(N).fill(0);
    let maxLength = 0;
    dp[0] = 1;

    for (let i = 1; i < N; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (data[i] > data[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
        if (maxLength < dp[i]) maxLength = dp[i];
    }

    // answer
    console.log(N - maxLength);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i <= N; i++) {
    data.push(+input[i]);
}

solution(N, data);
