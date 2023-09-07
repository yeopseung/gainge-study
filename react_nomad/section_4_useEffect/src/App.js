import { useState, useEffect } from "react";
import Button from "./Button";

// 중요! state가 변경되면 모든 코드가 재실행 된다 (하위의 자식 컴포넌트들도)
//  한번만 실행되도 괜찮은 코드들도 불필요하게 재실행 된다
//  해결 방법 => useEffect 사용

// useEffect(effect, deps){ return clean-up; };
//  deps: 상태 변화를 감지하고 싶은 값
//  effect: 컴포넌트가 만들어질 때, deps가 변화될 때만 실행하고 싶은 코드(함수)
//    deps가 [] 빈 배열이라면 감지할게 없으니 딱 한번만 실행될 것
//  return(clean-up) : 컴포넌트가 사라질 때 실행하고 싶은 코드(함수)
//  실행 방법
//    컴포넌트가 렌더링 될 때  (Mount)
//    특정 값(deps)가 변경 될 때 (Update)
//    컴포넌트가 사라질 때 (UnMount) => 해당 작업은 return 값을 통해 

// 정리
//  상태 변화를 감지하고 싶다면? =>useState사용
//  useState를 통한 상태 변화 감지를 특정 상황에서만 하고싶다면? => useEffect 사용

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 상태가 변할 때 마다 항상 실행되는 코드
  console.log("I run all the time (state changes)");

  // deps를 빈 배열로 줬기 때문에 상태변화를 감지할 것이 없음 -> 따라서 첫 렌더링 때 1번 실행된다
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // keyword가 변화할 때만 함수 실행 (다른 상태 변화에는 업데이트 되지 않는다!!)
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  // counter가 변화할 때만 함수 실행 (다른 상태 변화에는 업데이트 되지 않는다!!)
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  // keyword와 counter가 변화할 때만 함수 실행 (다른 상태 변화에는 업데이트 되지 않는다!!)
  useEffect(() => {
    console.log("I run when 'keyword' &'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <Button text={"Click"} onClick={onClick}></Button>
    </div>
  );
}

export default App;
