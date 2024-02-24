class Node {
    constructor(item) {
        this.value = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.cnt = 0;
    }

    // debug() {
    //     const tempList = [];
    //     let curNode = this.front;
    //     while(curNode !== null){
    //         tempList.push(curNode.value);
    //         curNode = curNode.next;
    //    }
    //    console.log(tempList.join('->'));
    // }

    enqueue(item) {
        const node = new Node(item);

        if (this.front) {
            this.rear.next = node;
        } else {
            this.front = node;
        }


        this.rear = node;
        this.cnt += 1;
    }

    dequeue() {
        // empty check
        if (this.cnt <= 0) return;


        const popNode = this.front;

        this.front = popNode.next;
        this.cnt -= 1;


        // 빼고 나서 비어있을 때, 아직 rear은 초기화 안된 상태 
        if (this.cnt <= 0) this.rear = null;
    }

    getSize() {
        return this.cnt;
    }

    isEmpty() {
        return this.cnt === 0 ? 1 : 0;
    }

    getHead() {
        return this.front ? this.front.value : -1;
    }

    getRear() {
        return this.rear ? this.rear.value : -1;
    }
}

function solution(data) {
    const myQueue = new Queue();
    let answer = '';

    for (let i = 0; i < data.length; i += 1) {
        const mode = data[i][0];

        if (mode === 1) {
            myQueue.enqueue(data[i][1]);
        } else if (mode === 2) {
            myQueue.dequeue();
        } else if (mode === 3) {
            answer += `${myQueue.getSize()}\n`;
        } else if (mode === 4) {
            answer += `${myQueue.isEmpty()}\n`;
        } else if (mode === 5) {
            answer += `${myQueue.getHead()}\n`;
        } else if (mode === 6) {
            answer += `${myQueue.getRear()}\n`;
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