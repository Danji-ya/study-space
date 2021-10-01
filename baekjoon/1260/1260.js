const solution = (N, M, V, data) => {
    let answer = '';
    const adjList = Array.from({ length: N }, () => new Array(0));

    for (let i = 0; i < M; i++) {
        let [from, to] = data[i];
        from -= 1;
        to -= 1;

        adjList[from].push(to);
        adjList[to].push(from);
    }

    adjList.forEach(row => row.sort((a, b) => a - b));

    const dfs = stNode => {
        const visitRoute = [];
        const visited = new Array(N).fill(false);
        let needVisit = [];
        needVisit.push(stNode);

        while (needVisit.length !== 0) {
            const curNode = needVisit.shift();
            if (!visited[curNode]) {
                visited[curNode] = true;
                visitRoute.push(curNode + 1);
                needVisit = [...adjList[curNode], ...needVisit];
            }
        }

        return visitRoute;
    };

    const bfs = stNode => {
        const visitRoute = [];
        const visited = new Array(N).fill(false);
        let needVisit = [];
        needVisit.push(stNode);

        while (needVisit.length !== 0) {
            const curNode = needVisit.shift();
            if (!visited[curNode]) {
                visited[curNode] = true;
                visitRoute.push(curNode + 1);
                needVisit = [...needVisit, ...adjList[curNode]];
            }
        }

        return visitRoute;
    };

    answer += `${dfs(V - 1).join(' ')}\n`;
    answer += `${bfs(V - 1).join(' ')}`;
    console.log(answer);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M, V] = input[0].split(' ').map(el => +el);
const data = [];
for (let i = 1; i < M + 1; i++) {
    data.push(input[i].split(' ').map(el => +el));
}

solution(N, M, V, data);
