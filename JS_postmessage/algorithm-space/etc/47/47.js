class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    swap(a, b) {
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    
    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let curIdx = this.heap.length - 1;
    
        while(curIdx > 0) {
            const parentIdx = Math.floor((curIdx-1) / 2);
            
            // 부모가 자식보다 작거나 같아야해서
            if(this.heap[parentIdx] > this.heap[curIdx]) { 
                this.swap(parentIdx, curIdx);
                curIdx = parentIdx;
            } else {
                break;
            }
        }
    }
    
    delete() {
        const lastIdx = this.heap.length - 1;
        // 마지막과 처음 swap
        this.swap(0, lastIdx);
        const item = this.heap.pop();
        this.bubbleDown();
        
        return item;
    }
    
    bubbleDown() {
        // 맨 위부터 시작
        let curIdx = 0;
        
        while(true) {
            const leftIdx = curIdx*2 + 1;
            const rightIdx = curIdx*2 + 2;
            let nextIdx = curIdx;
            
            // 왼쪽
            if(this.heap[leftIdx] && this.heap[leftIdx] < this.heap[nextIdx]) nextIdx = leftIdx;
            // 오른쪽
            if(this.heap[rightIdx] && this.heap[rightIdx] < this.heap[nextIdx]) nextIdx = rightIdx;
        
            if(nextIdx !== curIdx) {
                this.swap(curIdx, nextIdx);
                curIdx = nextIdx;
            } else {
                break;
            }
        }
    }
}

function solution(arr) {    
    const minHeap = new MinHeap();
    let answer = 0;
    
    // 일단 minHeap에 넣고
    for(let i=0; i<arr.length; i+=1) {
        minHeap.insert(arr[i]);
    }

    // 비어질때까지
    // 앞에 두개씩 꺼내서 합해서 다시 넣기
    while(minHeap.heap.length > 1) {
        const a = minHeap.delete();
        const b = minHeap.delete();
        const sum = a + b;
        answer+=sum;
        minHeap.insert(a+b);
    }
    
    // 정답 출력
    console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n= null;
let cnt = 0;
const data = [];

rl.on("line", function (x) {
  if(!n) n = +x;
  else {
    data.push(+x);
    cnt+=1;
  }
  if(cnt === n) rl.close();
}).on("close", function () {
  solution(data);
  process.exit();
});