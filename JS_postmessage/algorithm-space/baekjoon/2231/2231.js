function solution(N) {
    let answer = 0;

    for (let i = 0; i < N; i++) {
        let sum = 0;
        let num = i;
        while (num !== 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        if (i + sum === N) {
            answer = i;
            break;
        }
    }

    console.log(answer);
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(+input[0]);

//  다른사람풀이
// 각 자리의 숫자는 9까지이기 때문에 1부터 시작하는게 아니라 범위를 지정하여 시작하였음
// ex) 256       256 - 27 ~ 256 + 27
