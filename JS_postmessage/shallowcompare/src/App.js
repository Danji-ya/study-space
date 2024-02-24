import { useEffect, useState } from "react";

function App() {

  const [primitiveType, setPrimitiveType] = useState(true);
  const [objType, setObjType] = useState({someValue: true});

  console.log('ReRender');

  useEffect(() => {
    console.log('innerUseEffect');

  },[objType]);


  // primitive Type은 그대로
  function handleClick1() {
    setPrimitiveType(true);
  }

  // object Type은 클릭할때마다 리렌더링
  function handleClick2() {
    setObjType({someValue: true});
  }

  // 결론
  // shallowCompare를 하기때문에 object type은 참조하는 메모리 주소를 확인하기 때문에 매번 리렌더링


  return (
    <div>
        <button onClick={handleClick1}>Primitive type 저장</button>
        <button onClick={handleClick2}>Primitive type 저장</button>
    </div>
  );
}

export default App;
