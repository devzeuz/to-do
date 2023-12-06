import { useEffect, useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("TODOLIST");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  const [hasError, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  const updateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue !== "") {
      setTodoList((currentTodo) => {
        return [
          ...currentTodo,
          { id: crypto.randomUUID(), inputValue, completed: false },
        ];
      });
    }

    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodoList((currentTodo) => {
      return currentTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const deleteTodo = (id) => {
    setTodoList((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <div className=" flex justify-center ">
        <div className="bg-[#f3f3f3] w-96 flex  flex-col  p-5 rounded-xl">
          {/* INPUT SECTION */}
          <div className="bg-[white]   flex items-center p-2 rounded-full w-72 justify-center">
            <input
              type="text"
              value={inputValue}
              placeholder="Add Task "
              onChange={updateInputValue}
              className="p-3 border-none outline-none rounded-lg bg-transparent text-[#] "
            />

            <span>
              <button
                onClick={addTodo}
                className="  p-3  bg-[#f3f3f3] text-black font-extrabold  rounded-lg">
                Add
              </button>
            </span>
          </div>

          {/* TODO LIST */}
          <ul className="space-y-5 mt-5 ">
            {todoList.length === 0 ? "Input Something Genius" : "Add More Task"}
            {todoList.map((todo) => (
              <li
                key={todo.id}
                className="flex  justify-between items-center font-bold">
                <div className="space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  <span
                    style={{
                      color: todo.completed ? "grey" : "black",
                    }}
                    className="text-xl">
                    {todo.inputValue}
                  </span>
                </div>
                <button
                  onClick={(e) => deleteTodo(todo.id)}
                  className="bg-white p-2 rounded-xl">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
