const solution = (N, M, arr) => {
const visit = Array.from({length: N}, (v,i) => new Array(M).fill(0));
const needVisit = [];
const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const MAZE_MAX_X = M - 1;
const MAZE_MAX_Y = N - 1;

function isOutOfRange(y, x) {
    return x < 0 || y <0 || x > MAZE_MAX_X || y > MAZE_MAX_Y;
}

function bfs(x, y) {
    visit[x][y] = 1;
    needVisit.push([x, y]);

    while(needVisit.length !== 0){
        const [curX, curY] = needVisit.shift();

        for(let i=0; i<dir.length; i+=1){
            const nextX = curX + dir[i][0];
            const nextY = curY + dir[i][1];

            if(!isOutOfRange(nextX, nextY) && !visit[nextX][nextY] && arr[nextX][nextY] === 1){
                visit[nextX][nextY] = visit[curX][curY] + 1;
                needVisit.push([nextX, nextY]);
            }

        }

    }

}

bfs(0, 0);
console.log(visit[N-1][M-1]);

};

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(el => +el);
const data = [];
for (let i = 1; i < N + 1; i++) {
    data.push(input[i].split('').map(el => +el));
}
solution(N, M, data);