const iterableMap = new Map([['a', 5], ['b', 5]]);
const iterableArr = new Array(2);

console.dir(iterableMap);
console.dir(iterableArr);


// const obj = {a: 5, b: 1};

// console.log('일반 객체', obj);

// console.log('Iterator 객체', Object.entries(obj));


// 일반 객체를 Iterable인 객체로 만들기

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



console.log('for...of 루프');
for (let value of countObj){
  console.log(value);
}

console.log('spread 연산자');
console.log(...countObj);

console.log('destructing assignment');
const [a, ...rest] = countObj;
console.log(a, rest);