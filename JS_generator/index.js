function* myGenerator() {
  yield '1';
  yield '2';
}

// ----------- ## Generator 생성 -------------
const gen = myGenerator();
// console.log('gen:', gen);

// ----------- ## Generator의 next 메서드 -------------
const result1 = gen.next();
// result1 = {value: '1', done: false}
const result2 = gen.next();
// result2 = {value: '2'; done: false}
const result3 = gen.next();
// result3 = {value: undefined, done: true}


// ----------- ## Generator의 return 메서드 -------------
function* idMaker() {
  let idx = 0;
  for(let i=idx; i<1000; i+=1){
    yield `${i}-th id`;
  }
}

const generator = idMaker();
generator.next(); // {value: '0-th id', done: false}
//제네레이터 종료
generator.return('finish'); // {value: 'finish', done: true}


// ----------- ## Generator의 throw 메서드 -------------
function* myGen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

const g = myGen();
g.next(); // { value: 42, done: false }
// 에러 발생
g.throw(new Error('Something went wrong')); // Error caught



// ----------- ## 제네레이터함수를 이용해서 Iterable인 객체 만들기 ------------

// 이전
const countObj = {
  from: 1,
  to: 5,
}

Object.defineProperty(countObj, Symbol.iterator, {
  value: function() {
    let {from, to} = this;

    return {
      next: function() {
        if(from <= to) return iteratorProtocol(false, from++);
        else return iteratorProtocol(true);
      }
    }
  }
})

function iteratorProtocol(done, value) {
  if(!value) return { done: true };

  return {
    done: false,
    value
  }
}

// 이후
const countObj2 = {
  from: 1,
  to: 5,
}

Object.defineProperty(countObj2, Symbol.iterator, {
  value: function* () {
    for(let value = this.from; value < this.to; value+=1){
      yield value;
    }
  }
})

for (let value of countObj2){
  console.log(value);
}
