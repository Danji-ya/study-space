const solution = data => {
    const N = data[0];
    const M = data[1];
    const result = [];
    const tempArr = [];
    const visited = new Array(N).fill(false);

    const dfs = cnt => {
        if (cnt === M) {
            return result.push(tempArr.slice(0, M));
        }

        for (let i = 0; i < N; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            tempArr.push(i + 1);
            dfs(cnt + 1);
            visited[i] = false;
            tempArr.pop();
        }
    };

    dfs(0);
    result.map(pairNum => console.log(`${pairNum.join(' ')}`));
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
