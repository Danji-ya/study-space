function solution(n, maze){
    const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    const needVisit = [];
    let answer = 0;
    
    function isOutOfRange(y, x){
        return x < 0 || y < 0 || x > n-1 || y > n-1;
    }
    
    function isEnd(x, y){
        return x === n-1 && y === n-1;
    }
    
    // 최소한의 이동으로 도착지점까지 가야하는 문제이기 때문에 bfs방식이 적절
    function bfs(x, y, cnt){
         needVisit.push([x, y, cnt]);
         maze[x][y] = 0;
         
         
         while(needVisit.length >0){
            const [curX, curY, curCnt] = needVisit.shift();      
            
            if(isEnd(curX, curY)){
                answer = curCnt;
                break;
            }
            
            for(let i=0; i<dir.length; i+=1){
                const nextX = curX + dir[i][0];
                const nextY = curY + dir[i][1];
                
                if(!isOutOfRange(nextX, nextY) && maze[nextX][nextY] === 1){
                     needVisit.push([nextX, nextY, curCnt+1]);
                     maze[nextX][nextY] = 0;
                }
            }
         }   
    }
    bfs(0, 0, 1);
    console.log(answer);
}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
let cnt = 0;
const data = [];
rl.on("line", function (x) {
  if(!n) return n = +x;
  
  data.push(x.split('').map(el => +el));
  cnt++;
  
  if(cnt == n) rl.close();
}).on("close", function () {
  solution(n, data);
  process.exit();
})
