const solution = (N, data) => {
    const team1 = data[0];
    const team2 = data[1];

    const sumScore = list => list.reduce((acc, cur) => (acc += cur), 0);

    const team1Score = sumScore(team1);
    const team2Score = sumScore(team2);

    team1Score > team2Score ? console.log(team1Score) : console.log(team2Score);
};

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
    data.push(input[i].split(' ').map(el => +el));
}

solution(N, data);
