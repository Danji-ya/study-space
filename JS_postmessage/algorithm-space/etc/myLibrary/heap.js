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
            
            // 부모가 자식보다 작아야해서
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
            
          
            // 자식 노드가 존재시 자식 노드 중 가장 작은 것이랑 스왑하게 된다.
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
            
            // 부모가 자식보다 커야해서
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
          
            // 자식 노드가 존재시 자식 노드 중 가장 큰 것이랑 스왑하게 된다.
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

module.exports = {
    minHeap: new MinHeap(),
    maxHeap: new MaxHeap(),
}