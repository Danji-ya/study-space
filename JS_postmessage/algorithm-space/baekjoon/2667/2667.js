const solution = (N, map) => {
    let cnt = 0;
    const danji = [];
    const direction = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];
    const MAZE_SIZE_X = N - 1;
    const MAZE_SIZE_Y = N - 1;

    const isMinMax = (y, x) =>
        x < 0 || y < 0 || x > MAZE_SIZE_X || y > MAZE_SIZE_Y;

    const dfs = (x, y) => {
        if (map[x][y] === 1) {
            map[x][y] = 0;
            cnt += 1;
        }

        for (let i = 0; i < direction.length; i += 1) {
            const nextX = x + direction[i][1];
            const nextY = y + direction[i][0];

            if (!isMinMax(nextX, nextY) && map[nextX][nextY] === 1) {
                dfs(nextX, nextY);
            }
        }
    };

    for (let i = 0; i < N; i += 1) {
        for (let j = 0; j < N; j += 1) {
            if (map[i][j] === 1) {
                dfs(i, j);
                danji.push(cnt);
            }
            cnt = 0;
        }
    }
    console.log(danji.length);
    console.log(danji.sort((a, b) => a - b).join('\n'));
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
let count = 0;
const data = [];

rl.on('line', function (line) {
    if (!N) {
        N = +line;
    } else {
        data.push(line.split('').map(el => +el));
        count += 1;
    }
    if (count === N) rl.close();
}).on('close', function () {
    solution(N, data);
    process.exit();
});
