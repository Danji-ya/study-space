function solution(begin, target, words) {
    let answer = 0;
    
    if(words.filter( word => word === target).length === 0) return 0;
    
    return bfs(begin, target, words, 0);
}

const bfs = (begin, target, words, cnt) => {
    let visited = new Map();
    let needVisit = [];
    let answer = 0;
    
    visited.set(begin, answer);
    needVisit.push(begin);
    
    while(needVisit.length !== 0){
        let curWord = needVisit.shift();      
        // 한 개의 알파벳만을 바꾸면서 방문하지 않은 단어 목록을 가져온다.
        let findWord = words.filter(word => checkDiffOne(word,curWord) && !visited.has(word));
        
        for(let i=0; i<findWord.length; i++){
            visited.set(findWord[i], visited.get(curWord) + 1);
            needVisit.push(findWord[i]); 
        }
    }
    
    return visited.get(target);
}

const checkDiffOne = (str1, str2) => {
    let diffNum = 0;

    for(let i=0; i<str1.length; i++){
        if(str1[i] !== str2[i]) diffNum++;
    }

    return diffNum === 1 ? true : false;
}