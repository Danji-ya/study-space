const ALPHABET_LENGTH = 26;
const ASCII_CODE = 65;

function solution(R, C, data) {
  const visited = Array.from({length: ALPHABET_LENGTH}, (_v,_i) => 0);
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let answer = 0;

  function isMinMax(x, y) {
    return x < 0 || y < 0 || x >= R || y >= C;
  }

  function changeStateVisit(x, y, needVisit){
    if(needVisit){
      visited[data[x][y].charCodeAt() - ASCII_CODE] = 1;
      return;
    }
    visited[data[x][y].charCodeAt() - ASCII_CODE] = 0;
  }

  function dfs(cur, cnt){
    if(cnt > answer) answer = cnt;
    const [curX, curY] = cur;

    for(let i=0; i<dir.length; i+=1){
      const [nextX, nextY] = [curX + dir[i][0], curY + dir[i][1]];
      
      if(!isMinMax(nextX, nextY) && !visited[data[nextX][nextY].charCodeAt() - ASCII_CODE]){
        changeStateVisit(nextX, nextY, true);
        dfs([nextX, nextY], cnt+1);
        changeStateVisit(nextX, nextY, false);
      }
    }
  }

  changeStateVisit(0,0, true);
  dfs([0, 0], 1);

  console.log(answer);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [R, C] = input[0].split(' ').map(el => +el);
const data = [];
for (let i = 1; i <= R; i++) {
    data.push(input[i].split('').map(el => el));
}

solution(R, C, data);