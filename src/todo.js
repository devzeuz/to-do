import React, { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [hasError, setError] = useState(false);
  console.log(todoList);
  console.log(inputValue);
  const updateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const radioCheck = () => {
    addEventListener("click", () => {
      r;
    });
  };

  const onSubmit = () => {
    if (inputValue !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    } else {
      setError((error) => !error);
    }
    console.log(inputValue);
  };
  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={updateInputValue} />

        <span>
          <button onClick={onSubmit}>Add</button>
        </span>
        <div>{hasError ? "input something genius" : "Add your task "}</div>
        <ol>
          {todoList.map((toDoItem, id) => (
            <li key={id}>
              <input type="radio" />
              {toDoItem}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
