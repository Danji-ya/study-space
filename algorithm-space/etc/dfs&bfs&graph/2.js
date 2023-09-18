function solution(n, m, arr) {
    const graph = makeGraph(arr);
    let answer = 0;
    
    function makeGraph(arr) {
        const graph = {};

        arr.forEach(el => {
            const [start, end] = el;

            if(graph.hasOwnProperty(start)) graph[start].push(end);
            else graph[start] = [end];

            if(graph.hasOwnProperty(end)) graph[end].push(start);
            else graph[end] = [start];
        });
        return graph;
    }
    
    
    function dfs(graph, startNode) {
        const visited = Array(n+1).fill(false);
        const needVisit = [];
        
        visited[startNode] = true;
        needVisit.push(...graph[startNode]);
        
        while(needVisit.length !== 0) {
            const nextNode = needVisit.shift();
            
            if(!visited[nextNode]){
                visited[nextNode] = true;
                needVisit.push(...graph[nextNode]);
                answer+=1;
            }
        }
    
    }
    
    dfs(graph, 1);
    console.log(answer);
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
    if(!N) return N= +line
    if(!M) return M = +line;
    
    data.push(line.split(' ').map(el => +el));
    cnt += 1; 

    if (cnt === M) rl.close();
}).on('close', function () {
    solution(N, M, data);
    process.exit();
});