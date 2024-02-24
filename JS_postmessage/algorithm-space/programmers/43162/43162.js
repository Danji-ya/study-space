function solution(n, computers) {
    var answer = 0;
    let visit = [];
    let needVisit = [];
    
    //1번 컴터 -> 0 2번 컴터 -> 1 로
    computers.map( (computer,idx) => {
        
        // 해당 컴터 방문 안했을 때(전에 컴터들과 연결 안되어있을 때)
        if(!visit.includes(idx)){
            needVisit.push(idx);
            visit.push(idx);
            [visit, needVisit] = dfs(visit, needVisit, computer, computers);
            
            answer++;
        }
    });
    
    return answer;
}

const dfs = (needVisit, visit, computer, computers) => {
            
    while(needVisit.length !== 0){
        let curPc = needVisit.shift();
        
        if(!visit.includes(curPc)){
            visit.push(curPc);
        }

        for(let i=computer.length; i>=0; i--){          
            if(computers[curPc][i] === 1 && !visit.includes(i)){
                needVisit.unshift(i);
            }   
        } 
    }
    return [visit, needVisit];
}