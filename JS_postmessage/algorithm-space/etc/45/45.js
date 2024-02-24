class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }  
    top() {
        return this.heap[0];
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
        if (this.size() === 1) {
          return this.heap.pop();
        }
        
        // 마지막과 처음 swap
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
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
            if(this.heap[leftIdx] !== undefined && this.heap[leftIdx] < this.heap[nextIdx]) nextIdx = leftIdx;
            // 오른쪽
            if(this.heap[rightIdx] !== undefined && this.heap[rightIdx] < this.heap[nextIdx]) nextIdx = rightIdx;
        
            if(nextIdx !== curIdx) {
                this.swap(curIdx, nextIdx);
                curIdx = nextIdx;
            } else {
                break;
            }
        }
    }
}

class MaxHeap extends MinHeap {
    constructor() {
        super();
    }
        
    // Override
    bubbleUp() {
        let curIdx = this.heap.length - 1;
    
        while(curIdx > 0) {
            const parentIdx = Math.floor((curIdx-1) / 2);
            
            // 자식이 부모보다 작거나 같아야해서
            if(this.heap[parentIdx] < this.heap[curIdx]) { 
                this.swap(parentIdx, curIdx);
                curIdx = parentIdx;
            } else {
                break;
            }
        }
    }
    
    // Override
    bubbleDown() {
        // 맨 위부터 시작
        let curIdx = 0;
        
        while(true) {
            const leftIdx = curIdx*2 + 1;
            const rightIdx = curIdx*2 + 2;
            let nextIdx = curIdx;
            
            // 왼쪽
            if(this.heap[leftIdx] !== undefined && this.heap[leftIdx] > this.heap[nextIdx]) nextIdx = leftIdx;
            // 오른쪽
            if(this.heap[rightIdx] !== undefined && this.heap[rightIdx] > this.heap[nextIdx]) nextIdx = rightIdx;
        
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
    const answer = [];
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();

    for(let i=0; i<arr.length; i+=1) {
        // 조건1: maxHeap size > minHeap size ? minHeap에 insert : maxHeap에 insert
        
        if(maxHeap.size() > minHeap.size()) {
            minHeap.insert(arr[i]);
        } else {
            maxHeap.insert(arr[i]);
        }
        
        // 조건2: 최소힙의 모든원소는 최대힙의 모든원소보다 크거나 같아야한다.
        // 처음 예외처리
        if(minHeap.size() === 0) {
           answer.push(maxHeap.top()); 
        } else {
            if(maxHeap.top() > minHeap.top()){
                const minTop = minHeap.delete();
                const maxTop = maxHeap.delete();

                maxHeap.insert(minTop);
                minHeap.insert(maxTop);
            }
            answer.push(maxHeap.top());
        }
    }
    
    console.log(answer.join(' '));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = null;
const data = [];
rl.on("line", function (x) {
  if(!n) n = +x;
  else {
    data.push(...x.split(' ').map(el => parseInt(el)));
    rl.close();
  }
}).on("close", function () {
  solution(data);
  process.exit();
});