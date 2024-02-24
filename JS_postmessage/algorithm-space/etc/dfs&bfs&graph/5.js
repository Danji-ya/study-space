function solution(N, K) {
    const dir = [
        (x) => 3*x,
        (x) => x-1,
        (x) => x+1, 
    ];
    const visit = Array.from({length: 100001}, (v,i) => false);
    
    function bfs(n){
        const needVisit = [];
        
        // push [startNode, cnt]
        needVisit.push([n, 0]);
        visit[n] = true;
        
        while(needVisit.length !==0){
            const [curNode, cnt] = needVisit.shift();
            
            // 도착 시 반환
            if(curNode === K) return cnt;
            
            for(let i =0; i<dir.length; i+=1) {
                const nextNode = dir[i](curNode);
                
                if(!visit[nextNode] && nextNode <100001 && nextNode >= 0){
                    visit[nextNode] = true;
                    needVisit.push([nextNode, cnt+1]);
                }
            }
        }
    }
    
    console.log(bfs(N));
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let N = null;
let K = null;
rl.on('line', function (line) {
    [N, K] = line.split(' ').map(el => +el);
    rl.close();
}).on('close', function () {
    solution(N, K);
    process.exit();
});