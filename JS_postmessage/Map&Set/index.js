function getLog(show){
  console.log(show);
}

// -------   Set test   --------

const set = new Set();
const obj1 = {sameObj: 1};
const obj2 = {sameObj: 1};

set.add(obj1); // value 추가
set.add(obj2);
set.add(5);
set.add("5");
getLog(set.size); // 4

let set2 = new Set();
set2.add(5);
set2.add("5");
set2.add(5);     // 중복 시도
getLog(set2.size); // 2
set2.delete(5);    //  value 삭제
getLog(set2.size); // 1
getLog(set2.has("5")) // value 존재여부


function intersection(setA, setB){
  const set = new Set();

  for (let value of setB) {

    if(setA.has(value)) set.add(value);
  }

  return set;
}

function union(setA, setB){
  const set = new Set([...setA, ...setB]);

  return set;
}


const set3 = new Set([1, 2, 3, 4, 5]);
const set4 = new Set([1,5]);
getLog(intersection(set3, set4)); // Set(2) { 1, 5 }
getLog(union(set3, set4)); // Set(5) { 1, 2, 3, 4, 5 }


// -------   Map test   --------

const person = new Map();
person.set('name', 'jisong');
person.set('name', 'jiseong');
person.set('birthday', '0221');
person.set(1, '숫자형 key');

getLog(person); // Map(3) { 'name' => 'jiseong', 'birthday' => '0221', 1 => '숫자형 key' }
getLog(person.get('name')) // jiseong
getLog(person.has('name')); // true
getLog(person.size) // 3

const map = new Map([['a', 1], ['a', 2]]);
getLog(map); // Map(1) { 'a' => 2 }

const person1 = {name: 'kim'};
const person2 = {name: 'lee'};
const map1 = new Map([[person1, '1999'], [person2, '2000']]);

for (const entry of map1) {
  getLog(entry); // [ { name: 'kim' }, '1999' ] [ { name: 'lee' }, '2000' ]
}