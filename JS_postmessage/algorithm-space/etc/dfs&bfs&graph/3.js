function solution(M, N, arr) {
    const MAZE_SIZE_X = M - 1;
    const MAZE_SIZE_Y = N - 1;
    const dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];
    
    const virus = [];
    let time = -1;
    let blank = 0;
    let infectedRat = 0;
    
    // virus 위치 저장
    for(let i=0; i<N; i+=1) {
        for(let j=0; j<M; j+=1) {
            if(arr[i][j] === 1) virus.push([i, j]);
            if(arr[i][j] === -1) blank+=1;
        }
    }
        
    function bfs() {
        const visited = Array.from({length: N}, (v,i) => new Array(M).fill(false));
        const isOutOfRange = (y, x) => x <0 || y <0 || x > MAZE_SIZE_X || y > MAZE_SIZE_Y;
        const isPossibleInfect = (nextX, nextY) => !isOutOfRange(nextX, nextY) && arr[nextX][nextY] === 0 && visited[nextX][nextY] === false;
        const needVisit = [];
        
        for(let i=0; i<virus.length; i+=1){
            const [curX, curY] = virus[i];
            needVisit.push(virus[i]);
            visited[curX][curY] = true;
            infectedRat+=1;
        }
        
        while(needVisit.length !== 0){
            const needIterateNum = needVisit.length;
            
            // 먼저 바이러스 심어진 위치에서 각자 시작
            for(let i=0; i<needIterateNum; i+=1){
                const [curX, curY] = needVisit.shift();
            
                for(let j=0; j<dir.length; j+=1){
                    const nextX = curX + dir[j][0];
                    const nextY = curY + dir[j][1];
                    
                    if(isPossibleInfect(nextX, nextY)) {
                        needVisit.push([nextX, nextY]);
                        visited[nextX][nextY] = true;
                        infectedRat+=1;
                    }
            
                }
            }
            time+=1;
        }
    }
    
    // start
    bfs();
    
    
    // 예외 처리
    // 1. 빈 칸을 제외하고 이미 전염되어 있는 상태
    // 2. 감염시키지 못한 생쥐가 존재할 경우
    if(M*N - blank === infectedRat) console.log(time);
    else console.log(-1);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let M = null;
let N = null;
const data = [];
let cnt =0;

rl.on('line', function (line) {
    if(!M) return [M, N] = line.split(' ').map(el => +el);
    
    data.push(line.split(' ').map(el => +el));
    cnt += 1; 

    if (cnt === N) rl.close();
}).on('close', function () {
    solution(M, N, data);
    process.exit();
});