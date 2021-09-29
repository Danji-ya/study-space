const solution = data => {
    const N = data[0];
    const M = data[1];

    const visited = new Array(N).fill(false);
    const answer = [];
    const tempArr = [];

    function dfs(cnt, idx) {
        if (cnt === M) {
            return answer.push(tempArr.slice(0, M));
        }

        for (let i = idx; i < N; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            tempArr.push(i + 1);
            dfs(cnt + 1, i);
            tempArr.pop();
            visited[i] = false;
        }
    }

    dfs(0, 0);

    answer.map(num => console.log(num.join(' ')));
};
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const data = [];
rl.on('line', function (line) {
    data.push(...line.split(' ').map(el => +el));

    rl.close();
}).on('close', function () {
    solution(data);
    process.exit();
});
