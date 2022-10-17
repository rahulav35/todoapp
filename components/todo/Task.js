import React from "react";
import todo from "../../styles/Task.module.css";
function Todo({ setTyped, setArray, array, typedvalue }) {
  return (
    <div className={todo.firstdiv}>
      <div className={todo.round}>
        <button
          onClick={() => {
            setArray([...array, typedvalue]);
            setTyped("");
            console.log(typedvalue);
          }}
          className={todo.button}
        ></button>
      </div>
      <input
        onChange={(e) => setTyped(e.target.value)}
        className={todo.create}
        type="text"
        placeholder="Create a new todo"
        value={typedvalue}
      />
    </div>
  );
}
export default Todo;
