const solution = data => {
    const isRightTriangle = array => {
        array = array.sort((a, b) => b - a);

        const result =
            Math.pow(array[0], 2) ===
            Math.pow(array[1], 2) + Math.pow(array[2], 2);

        return result;
    };

    data.map(array => {
        if (isRightTriangle(array)) {
            console.log('rightangle');
        } else {
            console.log('triangle');
        }
    });
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const data = [];

rl.on('line', function (line) {
    if (+line === 0) rl.close();

    data.push(line.split(' ').map(el => +el));
}).on('close', function () {
    solution(data);
    process.exit();
});
