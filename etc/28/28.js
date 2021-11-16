class Stack {
    constructor() {
        this.arr = [];
    }

    push(item) {
        this.arr.push(item);
    }

    pop() {
        if (!this.isEmpty()) this.arr.pop();
    }

    getSize() {
        return this.arr.length;
    }

    isEmpty() {
        return this.getSize() === 0 ? 1 : 0;
    }

    getTop() {
        return this.isEmpty() ? -1 : this.arr[this.arr.length - 1];
    }

}

function solution(data) {
    let answer = '';
    const myStack = new Stack();


    for (let i = 0; i < data.length; i += 1) {
        const mode = data[i][0];

        if (mode === 1) {
            myStack.push(data[i][1]);
        } else if (mode === 2) {
            myStack.pop();
        } else if (mode === 3) {
            answer += `${myStack.getSize()}\n`;
        } else if (mode === 4) {
            answer += `${myStack.isEmpty()}\n`;
        } else if (mode === 5) {
            answer += `${myStack.getTop()}\n`;
        }
    }

    // 정답 출력
    console.log(answer);
}


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = null;
let cnt = 0;
const data = [];

rl.on("line", function (x) {
    if (!N) N = +x;
    else {
        cnt++;
        data.push(x.split(' ').map(e => +e));
    }

    if (cnt === N) rl.close();
}).on("close", function () {
    solution(data);
    process.exit();
});