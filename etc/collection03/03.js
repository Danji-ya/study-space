function solution(n) {
    // n = 4 
    // 맨 앞은 1로 고정 그다음은 무조건 0인 규칙이 존재
    // 그러면 남은 2자리는 n=2, n=3일 때 뒤에서부터 두개의 숫자들을 끌고 오면 된다.
    // 10 10, 10 00, 10 01
    // n= 5일때, 3자리가 필요하며 마찬가지로 앞에서 끌고오면 된다.
    // 이러한 규칙이 계속 적용
    
    const dp = [0, 1];
    for(let i=2; i<=n; i+=1){
        dp[i] = (dp[i-2] + dp[i-1]) % 1000007;
    }
    
    console.log(dp[n])
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = null;
rl.on('line', (line) => {
    n = +line;
    rl.close();
}).on('close', () => {
    solution(n);
    process.exit();
});
