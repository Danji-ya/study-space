const solution = data => {
    const moneyList = [10000, 1000, 100, 10, 1];

    let count = 0;

    function getChanges(payment) {
        const productPrice = 10000;
        let change = 10000 - payment;

        moneyList.map(money => {
            let amount = 0;
            amount = Math.floor(change / money);
            change -= money * amount;
            count += amount;
        });

        return count;
    }
    console.log(getChanges(data));
};
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const data = [];
rl.on('line', function (line) {
    data.push(...line.split(' ').map(el => +el));

    rl.close();
}).on('close', function () {
    solution(data);
    process.exit();
});
