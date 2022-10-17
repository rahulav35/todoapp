import React from "react";
import todoitem from "../../styles/Todoitem.module.css";

function Todoitem({ line }) {
  return (
    <div className={todoitem.todoname}>
      <div className={todoitem.rounddiv}>
        <img className={todoitem.check} src="/assets/icon-check.svg" alt="" />
      </div>
      <h1 className={todoitem.description}>{line}</h1>
      <img className={todoitem.cross} src="/assets/icon-cross.svg" alt="" />

      <div className={styles.thirddiv}>
        <h1 className={styles.all}>All</h1>
        <h1 className={styles.all}>Active</h1>
        <h1 className={styles.all}>Completed</h1>
      </div>
    </div>
  );
}

export default Todoitem;
