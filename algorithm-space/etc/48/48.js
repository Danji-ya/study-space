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

function solution(k, n, data) {
    const minHeap = new MinHeap();
    const uniqueArr = new Set(data);
    const result = [];

    // 일단 넣고
    for(let i=0; i<k; i+=1) {
        minHeap.insert(data[i]);
    }
    
    for(let i=0; i<n; i+=1) {
        const min = minHeap.delete();
        
        for(let j=0; j<k; j+=1) {
            const checkValue =  min * data[j];
            
            // 중복되는 값 제외
            if(!uniqueArr.has(checkValue)) {
                minHeap.insert(checkValue);
                uniqueArr.add(checkValue);
            }
        }
        
        result.push(min);
    }

    console.log(result[result.length-1]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let k, n= null;
const data = [];
rl.on("line", function (x) {
  if(!k) {
    [k, n] = x.split(' ').map(el => +el);
    return;
  }
  data.push(...x.split(' ').map(el => +el));
  rl.close();
}).on("close", function () {
  solution(k, n, data);
  process.exit();
});
