function makeMaze(M,N,K, data) {
    const maze = Array.from({length: N}, (v,i) => new Array(M).fill(0));
    for(let i=0; i<K; i++){
        maze[data[i][1]][data[i][0]] = 1;
    }
    
    return maze;
}

function solution(M,N,K, data) {
    const MAZE_SIZE_X = M - 1;
    const MAZE_SIZE_Y = N - 1;
    const direction = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];
    
    let answer = 0;
    
    function isMinMax(y, x) {
        return x<0 || y<0 || x > MAZE_SIZE_X || y > MAZE_SIZE_Y;
    }
    
    const maze = makeMaze(M,N,K, data);

    
    const dfs = (x,y) => {
        if(maze[x][y] === 1) {
            maze[x][y] = 0;
            cnt++;
        }
        
        for(let i=0; i<direction.length; i+=1) {
            const nextX = x + direction[i][1];
            const nextY = y + direction[i][0];
            if(!isMinMax(nextX, nextY) && maze[nextX][nextY] === 1){
                dfs(nextX, nextY);
            }
        }
    
    }
    
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(maze[i][j] === 1){
                dfs(i, j);
                answer++;
            }
        
        }
    }
    console.log(answer);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let [M, N, K] = [null, null, null];
const data = [];
let cnt =0;

rl.on('line', function (line) {
    if (!N) {
        [M, N, K] = line.split(' ').map(el => +el);
        return;
    }
    data.push(line.split(' ').map(el => +el));
    cnt += 1; 

    if (cnt === K) rl.close();
}).on('close', function () {
    solution(M, N, K, data);
    process.exit();
});