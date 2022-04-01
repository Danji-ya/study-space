const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
let deleteN = null;
const data = [];
rl.on("line", function (x) {
  if(!n) return n = +x;
  if(data.length < 1) return data.push(...x.split(' ').map(el => +el));
  deleteN = +x;
  rl.close();
}).on("close", function () {
  solution(n, data, deleteN);
  process.exit();
})
function solution(n, arr, deleteN){    
    const tree = Array.from({length: 51}, (v,i) => []);
    let root = -1;
    let answer = 0;
    for(let i=0; i<n; i+=1){
        const node = arr[i];
        if(node === -1){
            root = i;
            continue;
        }
        if(i !== deleteN) tree[node].push(i);
    }

    function bfs(root){
        const needVisit = [root];
        
        while(needVisit.length > 0){
            const cur = needVisit.shift();
            
            // leaf node일 경우 하위에 사진이 존재
            if(tree[cur].length === 0) answer+= 1;
            
            for(let i=0; i<tree[cur].length; i+=1){
                const childNode = tree[cur][i];
                             
                needVisit.push(childNode);
            }
        }
    }

    // root를 잘랐다면 계산할 필요x
    if(deleteN === root){
        console.log(0);
    } else {
        bfs(root);
        console.log(answer);
    }
}