class Node {
    constructor(item){
        this.value = item;
        this.next = null;
    }
}

class Queue {
    constructor(){
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
    
    enqueue(item){
        const node = new Node(item);
        
        if(this.front){
            this.rear.next = node;
        } else {
            this.front = node;
        }
        
        
        this.rear = node;
        this.cnt+=1;
    }
    
    dequeue(){
        // empty check
        if(this.cnt <= 0) return;
    
        
        const popNode = this.front;
        
        this.front = popNode.next;
        this.cnt-=1;
        
        
        // 빼고 나서 비어있을 때, 아직 rear은 초기화 안된 상태 
        if(this.cnt <= 0 ) this.rear = null;
    }
    
    getSize(){
        return this.cnt;
    }
    
    isEmpty(){
        return this.cnt === 0 ? 1 : 0;
    }
    
    getHead(){
        return this.front ? this.front.value : -1;
    }
    
    getRear(){
        return this.rear ? this.rear.value : -1;
    }
}


module.exports = new Queue();