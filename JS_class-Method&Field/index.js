class A {
  constructor() {
    this.doSomething();
    this.dodo();
    console.log(this);
  }

  doSomething = () => {
    console.log('I am A1');
  }

  dodo() {
    console.log('I am A2');
  }
}

class B extends A {
  constructor() {
    super();
    console.log(this);
  }

  doSomething = () => {
    console.log('I am B1');
  }

  dodo() {
    console.log('I am B2');
  }
}

const b = new B(); 
// 'I am A1'
// 'I am B2'
// 가 호출됨

// doSomething은 필드 dodo는 메서드
// 필드는 prototype이 아닌 개별 객체에만 클래스 필드가 설정된다는 점
// console.log(A.prototype.doSomething); // undefined
// console.log(A.prototype.dodo); // [Function: dodo]
