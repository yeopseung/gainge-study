import { useState } from "react";

// useState 연습

// Tip. '...' -> Array 등을 unpack 해줌
// Tip. list를 출력할 때는 map 사용하는게 좋다

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    // 비어있는 경우 - pass
    if (toDo === "") {
      return;
    }

    // 리스트에 todo 추가
    // Tip. '...' -> Array 등을 unpack 해줌
    setToDos((prev) => [toDo, ...prev]);

    // 초기화
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </div>
  );
}

export default App;
