/* ===============================테스트 케이스 정리===================================== */
/* *************한줄 입력************ */
// case 1:
// 10

// case 2:
// 2 3

// case 3:
// abcd

// case 4:
// hello world

/* *************여러줄 입력************* */
// case 1:
// 5
// 1
// 2
// 3
// 4
// 5

// case 2 (테케T 가 없는 경우):
// 4
// 2 3
// 1 0 0 1
// 1 1 1 1
// 0 1 0 1
// 0 1 1 1

// case 3 (테케T 가 있는 경우):
// 2
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// 2
// 2 1
// 5 4

/* ===============================입력 받는 코드===================================== */
/* ---------------readline이용 -------------- */
/* *************한줄입력********************* */
// const solution = data => {
//     console.log(data);
// };
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const data = [];
// rl.on('line', function (line) {
//     data.push(line);
//     // data = line.split('').map((el) => el);
//     // data = line.split(' ').map((el) => el);
//     // data = line.split('').map((el) => +el);

//     rl.close();
// }).on('close', function () {
//     solution(data);
//     process.exit();
// });

/* ***************여러줄 입력 (테케(T)가 없는 경우)********************* */
// const solution = (N, info, data) => {
//     console.log(N);
//     const [X, Y] = info;
//     console.log(X, Y);
//     console.log(data);
// };

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let N = null;
// let info = null;
// let count = 0;
// const data = [];

// rl.on('line', function (line) {
//     if (!N) {
//         // N이 null이면
//         N = +line;
//     } else if (!info) {
//         // N이 null이 아닌데, info가 null이면
//         info = line.split(' ').map(el => +el);
//     } else {
//         // N과 info가 null이 아니면
//         data.push(line);
//         // data.push(line.split('').map((el) => +el));
//         // data.push(line.split('').map((el) => el));
//         // data.push(line.split(' ').map((el) => +el));
//         count += 1; // data를 입력받으면 count를 증가시켜주고
//     }
//     if (count === N) {
//         // count가 N일때 rl.close()를 호출해준다.
//         rl.close();
//     }
// }).on('close', function () {
//     // rl.close()를 호출하면 이 콜백함수로 들어오고
//     solution(N, info, data); // solution을 호출 한 후
//     process.exit(); // 프로세스를 종료한다.
// });

/* ***************여러줄 입력 (테케(T)가 있는 경우)********************* */
// const solution = (N, data) => {
//     console.log(N);
//     console.log(data);
// };

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let T = null;
// let N = null;
// let info = null;
// let countN = 0;
// let countT = 0;
// let data = [];

// rl.on('line', function (line) {
//     if (!T) {
//         T = +line;
//     } else if (!N) {
//         N = +line;
//     } else {
//         data.push(line);
//         // data.push(line.split('').map((el) => +el));
//         // data.push(line.split('').map((el) => el));
//         // data.push(line.split(' ').map(el => +el));
//         countN += 1; // data를 입력받으면 countN을 증가시켜주고
//     }
//     if (countN === N) {
//         // N만큼 data를 잘 입력 받았으면
//         solution(N, data); // solution을 호출하고
//         N = null; // T, countT를 제외한 값들을 초기화해준다.
//         info = null;
//         countN = 0;
//         data = [];

//         countT += 1; // 그리고 테스트 케이스 하나를 통과했으니 countT를 1 올려준다.
//     }
//     if (countT === T) {
//         // 입력받은 T 만큼 테스트 케이스를 통과하게되면
//         rl.close(); // rl.close()를 호출하고
//     }
// }).on('close', function () {
//     process.exit(); // 종료한다.
// });

/* ------------------fs이용------------------ */
// 종료시 ctrl + d 해줘야함
/* ******************한줄 입력********************* */
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// console.log(input);

/* ***************여러줄 입력********************* */
// const solution = (N, data) => {
//     console.log(N);
//     console.log(data);
// };

// const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const N = +input[0];
// const data = [];
// for (let i = 1; i < N + 1; i++) {
//     // 위에서 N을 받을떄 input[0]이 빠져나갔기 때문에 1~N을 받아야한다.
//     data.push(input[i].split(' '));
//     // data.push(input[i].split(' ').map(el => +el));
// }

// solution(N, data);

/* =============저장되는 예시================ */
// data.push(line);
// 10 -> ['10']
// 2 3 -> ['2 3']
// abcd -> ['abcd']
// hello world -> ['hello world']

// data = line.split('').map((el) => el);
// 10 -> ['1','0']
// 2 3 -> ['2', ' ' ,'3']
// abcd -> ['a', 'b', 'c', 'd']
// hello world -> ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// data = line.split(' ').map((el) => el);
// 10 -> ['10']
// 2 3 -> ['2', '3']
// abcd -> ['abcd']
// hello world -> ['hello', 'world']

// data = line.split('').map((el) => +el);
// 10 -> [1, 0]
// 2 3 -> [2, 0, 3]
// abcd -> [ NaN, NaN, NaN, NaN ]
// hello world -> [ NaN, NaN, NaN, NaN, NaN, 0, NaN, NaN, NaN, NaN, NaN ]

/* =============참고================ */
// https://grap3fruit.dev/blog/%EA%B5%AC%EB%A6%84(goorm),-%EB%B0%B1%EC%A4%80(BOJ)-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8-JavaScript%EB%A1%9C-%EC%9E%85%EB%A0%A5%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC
