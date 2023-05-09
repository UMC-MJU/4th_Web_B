import React, { useEffect } from "react";
import { useState } from "react";
import "./Visitor.css";

function Visitor() {
  const [names, setNames] = useState([
    { id: 1, text: "김세빈" },
    { id: 2, text: "장호진" },
    { id: 3, text: "권용재" },
    { id: 4, text: "민승기" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleClick = () => {
    const array = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(array);
  };

  const onKeyPress = (e) => {
    //엔터 누르면 출력
    if (e.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    //names가 변경 될때 마다 names에 있는 방문자들의 배열을 렌더링
    console.log(names);
  }, [names]);

  const onRemove = (id) => {
    // 삭제하는 코드
    const remove = names.filter((name) => name.id !== id);
    setNames(remove);
  };
  const nameList = names.map(     
    //더블클릭시 사용자 삭제
    (name ) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
    )
  );
  return (
    <div>
      <p className="nameListForm">방문자 입력란</p>
      <input
        className="visitorInput"
        type="text"
        placeholder="홈페이지 방문객 이름을 입력하세요"
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={handleClick}></button>
      <p className="visitorPrint">{nameList}</p>
    </div>
  );
}
export default Visitor;
