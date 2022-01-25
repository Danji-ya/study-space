const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let a,b,c,d = null;
rl.on('line', function (line) {
    if(!a) return [a, b] = line.split(' ').map(el => +el);
    
    [c, d] = line.split(' ').map(el => +el);
    rl.close();
}).on('close', function () {
    solution(a, b, c, d);
    process.exit();
});

function GCD(a, b) {
    let R;
    if(a < b) {
        let temp = a;
        a = b;
        b = temp;
    }

    while(a%b > 0) {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
}
    
function solution(a, b, c, d){
    let denominator = a*d + c*b;
    let numerator = b*d;

    const gcd = GCD(denominator, numerator);
    
    denominator/=gcd;
    numerator/=gcd;
    
    console.log(`${denominator} ${numerator}`);
}
