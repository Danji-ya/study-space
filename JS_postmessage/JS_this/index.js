function func() {
  // debugger;
  console.log('this:', this);
}

const obj = {
  methodA: func
}

function CreateFunc() {
  this.methodA = func;
}

// func(); // 일반 함수 호출
// obj.methodA() // 객체의 메서드로서 호출
// const myObj = new CreateFunc();
// myObj.methodA(); // 인스턴의 메서드로서 호출

// -------- 화살표 함수로 변경 ---------

const obj1 = {
  methodA: () => {
    console.log('화살표의 this', this);
  }
}

function CreateFunc1() {
  console.log('CreateFunc1의 this', this);
  this.methodA = () => {
    console.log('화살표의 this', this);
  };
}

obj1.methodA() // 객체의 메서드로서 호출
const myObj1 = new CreateFunc1();
myObj1.methodA();


// const obj2 = {
//   a: 2022,
//   methodA: function() {
//     console.log('this:', this, 'a:', this.a);
//   }
// }

// obj.methodA.bind(obj2); // this가 바인딩된 함수 반환
// obj.methodA.call(obj2); 
// this 바인딩 후 함수 호출 
// this: {a: 2022, methodA: ƒ}

// obj.methodA(); 
// this: {methodA: ƒ}

