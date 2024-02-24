const str = 'abc';
// 어떻게 순회할지에 대해 구체적, 명령적으로 정의하기 보다는 
for(let i = 0; i < str.length; i+=1) {
  // console.log(str[i]);
}

// 보다 선언적으로 가능해짐
for(const i of str) {
  // console.log(i);
}


const set = new Set([1, 2, 3]);

// for (const a of set) console.log(a);

// set[0]  idx로 접근할 수 없다.

// Symbol.iterator 메서드를 null로 바꾼다면 반복 가능한 객체가 더이상 제 기능을 못함

// set[Symbol.iterator] = null;
// for (const a of set) console.log(a); // TypeError: set is not iterable

const map = new Map([['a', 1], ['b', 2]]);

for(const a of map.keys()) console.log(a);


const countObj = {
  from: 1,
  to: 5,
}

Object.defineProperty(countObj, Symbol.iterator, {
  value() {
    let {from, to} = this;

    return {
      next() {
        if(from <= to) return iteratorProtocol(from++);
        
        return iteratorProtocol();

      },
      [Symbol.iterator]() {return this}
    }

  }
})

function iteratorProtocol(value) {
  if(!value) return { done: true };

  return {
    done: false,
    value
  }
}

for(const a of countObj) {
  console.log(a);
}
