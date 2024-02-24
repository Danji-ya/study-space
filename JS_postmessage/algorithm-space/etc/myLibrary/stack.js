class Stack {
    constructor(){
        this._arr = [];
        this._top = -1;
    }
    
    push(item){
        this._arr[++this._top] = item;
    }
    
    pop(){
        if(this._top < 0) return;
        
        const popElement = this._arr[this._top];
        this._arr = this._arr.slice(0, this._top--);
    }
    
    getSize(){
        return this._top + 1;
    }
    
    isEmpty(){
        return this._top === -1 ? 1 : 0;
    }
    
    getTop(){
        return this.isEmpty() ? -1 : this._arr[this._top];
    } 
}

module.exports = new Stack();