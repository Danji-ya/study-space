function solution(L, R, C, cube) {
    const dir = [
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0],
      [1, 0, 0],
      [-1, 0, 0],
    ];
  
    const out_range = (x, y, z) =>
      x < 0 || y < 0 || z < 0 || x >= L || y >= R || z >= C;
    const visited = Array.from(Array(L), () =>
      Array.from(Array(R), () => Array(C).fill(0))
    );
    const need_visit = [];
    let escape = false;
  
    visited[0][0][0] = true;
  
    function bfs(x, y, z, time) {
      need_visit.push([x, y, z, time]);
  
      while (need_visit.length > 0) {
        const [vx, vy, vz, vtime] = need_visit.shift();
        if (cube[vx][vy][vz] === "E") {
          escape = true;
          console.log(`탈출 성공 : ${vtime}분`);
          break;
        }

        for (let i=0; i<dir.length; i+=1){

            nx = vx + dir[0];
            ny = vy + dir[1];
            nz = vz + dir[2];
    
            if (
              out_range(nx, ny, nz) ||
              cube[nx][ny][nz] === "#" ||
              visited[nx][ny][nz]
            )
              continue;
    
            visited[nx][ny][nz] = true;
            need_visit.push([nx, ny, nz, vtime + 1]);
        }
  
 
        
      }
    }
  
    bfs(0, 0, 0, 0);

    if (!escape) console.log("탈출 불가");
}
  
const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let L = null;
let R = null;
let C = null;
let cube = [];
let tmp = [];

rl.on("line", (line) => {
    if (!L) [L, R, C] = line.split(" ").map((el) => +el);
    else if (line) {
        tmp.push(line.split(""));
        if (tmp.length === R) {
        cube.push(tmp);
        tmp = [];
        }
    }
    if (cube.length === L) rl.close();
}).on("close", () => {
    solution(L, R, C, cube);
    process.exit();
});
  