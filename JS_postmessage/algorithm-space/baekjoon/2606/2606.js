const solution = (N, M, data) => {
    const adjList = Array.from({ length: N }, () => new Array(0));
    let answer = -1;
    const startNode = 1;

    for (let i = 0; i < M; i += 1) {
        let [from, to] = data[i];
        from -= 1;
        to -= 1;
        adjList[from].push(to);
        adjList[to].push(from);
    }

    const dfs = node => {
        const visited = new Array(N);
        let needVisit = [];
        needVisit.push(node);

        while (needVisit.length !== 0) {
            const curNode = needVisit.shift();

            if (!visited[curNode]) {
                visited[curNode] = true;
                answer += 1;
                needVisit = [...adjList[curNode], ...needVisit];
            }
        }
    };

    // start
    dfs(startNode - 1);
    console.log(answer);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const M = +input[1];
const data = [];
for (let i = 2; i < M + 2; i += 1) {
    data.push(input[i].split(' ').map(el => +el));
}

solution(N, M, data);
