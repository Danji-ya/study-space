function makeAdjList(adjList, data, M) {
    for (let i = 0; i < M; i++) {
        const a = data[i][0];
        const b = data[i][1];
        adjList[a].push(b);
        adjList[b].push(a);
    }
}

const solution = (N, M, data) => {
    const adjList = Array.from({ length: N }, (v, i) => new Array(0));
    const visited = new Array(N).fill(false);

    let answer = 0;

    makeAdjList(adjList, data, M);

    const dfs = (idx, cnt) => {
        if (answer === 1) return;
        if (cnt === 4) return (answer = 1);

        visited[idx] = true;

        for (let i = 0; i < adjList[idx].length; i += 1) {
            const nextNode = adjList[idx][i];

            if (!visited[nextNode]) {
                dfs(nextNode, cnt + 1);
            }
        }
        visited[idx] = false;
    };

    for (let startNode = 0; startNode < N; startNode += 1) {
        if (answer === 1) return console.log(answer); // 다 돌필요 없이 바로 끝
        dfs(startNode, 0);
    }

    console.log(answer);
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
let M = null;
let count = 0;
const data = [];

rl.on('line', function (line) {
    if (!M) {
        [N, M] = line.split(' ').map(el => +el);
    } else {
        data.push(line.split(' ').map(el => +el));
        count += 1;
    }

    if (count === M) {
        rl.close();
    }
}).on('close', function () {
    solution(N, M, data);
    process.exit();
});
