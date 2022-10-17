import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/todo/Header";
import Todo from "../components/todo/Task";
import Todoitem from "../components/todo item/Todoitem";
function App() {
  const [array, setArray] = useState([]);
  const [typed, setTyped] = useState("");
  return (
    <div className={styles.maindiv}>
      <Header />
      <Todo
        setTyped={setTyped}
        typedvalue={typed}
        setArray={setArray}
        array={array}
      />
      <div className={styles.seconddiv}>
        {array.map((singledata, i) => {
          console.log(singledata);
          return <Todoitem line={singledata} key={i} />;
        })}
      </div>
      <div className={styles.thirddiv}>
        <h1 className={styles.all}>All</h1>
        <h1 className={styles.all}>Active</h1>
        <h1 className={styles.all}>Completed</h1>
      </div>
    </div>
  );
}
export default App;
