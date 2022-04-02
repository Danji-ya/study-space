const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
let cnt = 0;
const data = [];
const dataRG = [];
rl.on("line", function (x) {
  if(!n) return n = +x;
  data.push(x.split('').map(el => el));
  dataRG.push(x.split('').map(el => el === 'G' ? 'R' : el));
  cnt+=1;
  if(n === cnt) rl.close();
}).on("close", function () {
  solution(n, data, dataRG);
  process.exit();
})

function solution(n, data, dataRG){
  let cnt = 0;
  let cntRG = 0;
  const dir = [[0, -1], [1, 0], [-1, 0], [0, 1]];
  const visitedRG = Array.from({length: n}, (_v, _i) => new Array(n).fill(0));
  const visited = Array.from({length: n}, (_v, _i) => new Array(n).fill(0));
  
  function isMinMax(x, y) {
    return x >= n || y >= n || x < 0 || y < 0;
  }

  function bfs(firstNode, curData, curVisited) {
    const initColor = curData[firstNode[0]][firstNode[1]];
    const needVisit = [];
    needVisit.push(firstNode);

    while(needVisit.length > 0) {
      const [x, y] = needVisit.shift();
      for(let i=0; i<dir.length; i+=1) {
        const [nextX, nextY] = [x + dir[i][0], y + dir[i][1]];
         
        if(!isMinMax(nextX, nextY) && !curVisited[nextX][nextY]){
          const nextColor = curData[nextX][nextY];
            if(initColor === nextColor){
              needVisit.push([nextX, nextY]);
              curVisited[nextX][nextY] = 1;
            }
        }
      }
    }
  }

  for(let i=0; i<n; i+=1){
    for(let j=0; j<n; j+=1){
      if(!visitedRG[i][j]){
        visitedRG[i][j] = 1;
        bfs([i,j], dataRG, visitedRG);
        cntRG+=1;
      }
      if(!visited[i][j]){
        visited[i][j] = 1;
        bfs([i, j], data, visited);
        cnt+=1;
      }
    }
  }

  console.log(cnt, cntRG);
}