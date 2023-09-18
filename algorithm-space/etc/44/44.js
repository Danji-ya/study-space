class Node {
    constructor(val) {
        this.value = val;
        this.leftNode = null;
        this.rightNode = null;
    }
    
    setVal(val) {
        this.value = val;
    }
    
    setLeft(node) {
        this.leftNode = node;
    }
    
    setRight(node) {
        this.rightNode = node;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.answer = [];
    }
    
    insert(value, left, right) {    
        if(!this.root){
            this.root = new Node(value);
            if(left !== -1) this.root.setLeft(new Node(left));
            if(right !== -1) this.root.setRight(new Node(right));
            return;
        }
        
        // 연결해줄 노드 찾기
        this.findConnectNode(this.root, value, left, right);
    }
    
    findConnectNode(node, value, left, right) {
        if(node === null) return;
        
        if(node.value === value) {
            if(left !== -1) node.setLeft(new Node(left));
            if(right !== -1) node.setRight(new Node(right));
        } else {
            this.findConnectNode(node.leftNode, value, left, right);
            this.findConnectNode(node.rightNode, value, left, right);
        }
    }
    

    preOrder(node) {
        if(!node) return;
        
        // 출력 먼저
        this.answer.push(node.value);
        
        this.preOrder(node.leftNode);
        this.preOrder(node.rightNode);
    }
    
    inOrder(node) {
        if(!node) return;
        
        // 왼쪽 먼저
        this.inOrder(node.leftNode);
        
        this.answer.push(node.value);
        this.inOrder(node.rightNode);
    }
    
    postOrder(node) {
        if(!node) return;
        
        this.postOrder(node.leftNode);
        this.postOrder(node.rightNode);
        
        // 출력을 맨 나중
        this.answer.push(node.value);
    }
}

function solution(n, m ,arr) {
    const binaryTree = new BinaryTree();
    
    for(let i=0; i<arr.length; i+=1) {
        binaryTree.insert(...arr[i]);
    }
        
    switch(m) {
        case 0:
            binaryTree.preOrder(binaryTree.root);
            break;
        case 1:
            binaryTree.inOrder(binaryTree.root);
            break;
        case 2:
            binaryTree.postOrder(binaryTree.root);
            break;
        default:
            console.log('fail');
    }
    
    console.log(binaryTree.answer.join(' '));
}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, m = null;
let cnt = 0;
const data = [];
rl.on("line", function (x) {
  if(!n) [n, m] = x.split(' ').map(el => +el);
  else {
    data.push(x.split(' ').map(el => +el));
    cnt+=1;
  }
  if(cnt === n) rl.close();
}).on("close", function () {
  solution(n, m ,data);
  process.exit();
});