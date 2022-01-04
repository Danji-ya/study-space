const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let [L, C] = [null, null];
const data = [];
rl.on('line', function (line) {
    if(!L) return [L, C] = line.split(' ').map(el => +el);
    
    data.push(...line.split(' '));
    rl.close();
}).on('close', function () {
    solution(L, C, data);
    process.exit();
});

function solution(l, c, data){
    const answer = [];

    // 알파벳순 정렬
    data.sort();


    function isVowels(ch) {
        return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'; 
    }
    
    
    
    function dfs(idx, vowelLen, consonantLen, str){
        if(str.length  === l){
            if(vowelLen >= 1 && consonantLen >=2){
                answer.push(str);
            }
            
            return;
        }
        
        // idx가 C개의 문자보다 커지는 것 방지
        if(idx+1 >  c) return;
        
        // + true -> 1 + false -> 0
        // 현재 idx 문자 포함
        dfs(idx+1, vowelLen + isVowels(data[idx]), consonantLen + !isVowels(data[idx]), str + data[idx]);
        
        // 미포함
        dfs(idx+1, vowelLen , consonantLen, str);
    }
    
    dfs(0, 0, 0, '');
    
    console.log(answer.join('\n'));
}