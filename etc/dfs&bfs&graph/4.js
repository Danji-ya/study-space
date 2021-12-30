function solution(N, M, maze) {
    const MAZE_MAX_X = M - 1;
    const MAZE_MAX_Y = N - 1;
    const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    // 무한루프 체크
    const visited = Array.from({length: N}, (v,i) => new Array(M).fill(false));
    // dp[x,y]는 x,y 좌표에서 시작해서 최대로 정차할 수 있는 칸수를 저장
    const dp = Array.from({length: N}, (v,i) => new Array(M).fill(0));
    let isInfiniteLoop = false;
    
    const isOutOfRange = (y, x) => x < 0 || y < 0 || x > MAZE_MAX_X || y > MAZE_MAX_Y;
    
    function dfs(x, y) {
        if(isInfiniteLoop) return;
        
        // infinite loop break;
        if(visited[x][y]) return isInfiniteLoop = true;
   
        // 이미 계산된 경로는 계산할 필요x
        if(dp[x][y] > 0) return dp[x][y];
        
        // 자신칸도 정차한 칸이기 때문에 1로 설정
        dp[x][y] = 1;
        visited[x][y] = true;
        
        for(let i=0; i<dir.length; i+=1){
            const nextX = x + dir[i][0] * maze[x][y];
            const nextY = y + dir[i][1] * maze[x][y];
            if(!isOutOfRange(nextX, nextY) && maze[nextX][nextY] !== 0) dp[x][y] = Math.max(dp[x][y], dfs(nextX, nextY) + 1);
        }
        visited[x][y] = false;
        return dp[x][y];
    }
    
    const result = dfs(0, 0);
    
    if(isInfiniteLoop) console.log(-1);
    else console.log(result);
}



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let N = null;
let M = null;
const data = [];
let cnt =0;
rl.on('line', function (line) {
    if(!N) return [N, M] = line.split(' ').map(el => +el);
    data.push(line.split('').map(el => +el));
    cnt += 1; 
    if (cnt === N) rl.close();
}).on('close', function () {
    solution(N, M, data);
    process.exit();
});