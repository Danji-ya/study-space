function solution(k) {
    let n = 1;
    let cnt = 0;
    let needChocolateSize;
    
    // 먹어야하는 양보다는 일단 많아야 한다.
    // k: 먹어야하는 양
    // n: 사야하는 가장 작은 초콜릿의 크기
    while(true){
        if (k > n) n*=2;
        else break;
    }
    needChocolateSize = n;
    
    // 쪼개면서 카운트
    while(k > 0){
        if( k>= n) k-=n;
        else {
            n /= 2;
            cnt+=1;
        }
    }
    
    console.log(needChocolateSize, cnt);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let k = null;
rl.on('line', function(line) {
    k = +line;
    rl.close();
}).on('close', function() {
    solution(k);
    process.exit();
})
