const solution = (N, M, data) => {
    const visited = Array.from({ length: M }, (v, i) =>
        new Array(N).fill(false),
    );

    const canX = [1, 0, -1, 0];
    const canY = [0, -1, 0, 1];

    const moveAble = (x, y) => {
        if (x < 0 || y < 0 || x > N - 1 || y > M - 1) return false;

        return true;
    };

    const bfs = (startX, startY) => {
        const needVisit = [];

        // start 방문처리
        visited[0][0] = true;
        needVisit.push([startX, startY, 0]);

        while (needVisit.length !== 0) {
            const [x, y, cnt] = needVisit.shift();

            if (x === N - 1 && y === M - 1) return cnt;

            for (let i = 0; i < canX.length; i++) {
                if (
                    moveAble(x + canX[i], y + canY[i]) &&
                    !visited[y + canY[i]][x + canX[i]]
                ) {
                    visited[y + canY[i]][x + canX[i]] = true;

                    if (data[y + canY[i]][x + canX[i]] === 1) {
                        data[y + canY[i]][x + canX[i]] = 0;
                        needVisit.push([x + canX[i], y + canY[i], cnt + 1]);
                    } else {
                        needVisit.unshift([x + canX[i], y + canY[i], cnt]);
                    }
                }
            }
        }
    };

    // start
    console.log(bfs(0, 0));
};

const { BADFLAGS } = require('dns');
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
        data.push(line.split('').map(el => +el));
        count += 1;
    }

    if (count === M) {
        rl.close();
    }
}).on('close', function () {
    solution(N, M, data);
    process.exit();
});