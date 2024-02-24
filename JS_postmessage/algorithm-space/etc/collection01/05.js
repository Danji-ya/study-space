const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let l = null;
const start = [];
const end = [];
rl.on('line', function (line) {
    if(!l) return l = +line;
    if(start.length === 0){
        return start.push(...line.split(' ').map(el => +el));
    }
    end.push(...line.split(' ').map(el => +el));
    rl.close();
}).on('close', function () {
    solution(l, start, end);
    process.exit();
});


// 현재 좌표로부터 이동할 수 있는 칸을 우선적으로 탐색하며 
// 이동한 횟수를 축척하면 해결할 수 있는 문제이다.
function solution(l, start, end){
    const [startX, startY] = start;
    const [endX, endY] = end;
    const dir = [
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, -1],
        [2, 1],
        [1, -2],
        [-1, -2]
    ];
    const visited = Array.from({length: l}, (v,i) => new Array(l).fill(false));
    let answer = 0;
    
    
    function isOutOfRange(y, x){
        return x < 0 || y < 0 || x >= l || y >= l;
    }
    
    function bfs(x, y, startCnt){
        const needVisit = [];
        needVisit.push([x, y, startCnt]);
        visited[x][y] = true;
        
        while(needVisit.length !== 0) {
            const [curX, curY, cnt] = needVisit.shift();
            
            // 도착했다면 탈출
            if(curX === endX && curY === endY) {
                answer = cnt;
                break;
            }
            
            // 현재 위치로부터 이동가능한 칸을 push
            // 재방문 방지를 위한 visited 이용
            for(let i=0; i<dir.length; i+=1){
                const nextX = curX + dir[i][0];
                const nextY = curY + dir[i][1];
                
                if(!isOutOfRange(nextX, nextY) && !visited[nextX][nextY]){
                    needVisit.push([nextX, nextY, cnt+1]);
                    visited[nextX][nextY] = true;
                }
            
            }
        }
    }
    
    bfs(startX, startY, 0);
    console.log(answer);
}
