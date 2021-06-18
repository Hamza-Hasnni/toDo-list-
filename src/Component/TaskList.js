import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const toDos = useSelector((state) => state.toDo);
  const [myState, setMyState] = useState("all");

  // const toDoFilter = () => {
  //   switch (myState) {
  //     case "completed":
  //       return  toDos.filter((el) => el.isDone) ;

  //     case "notCompleted":
  //       return  toDos.filter((el) => !el.isDone) ;

  //     case "all":
  //       return toDos ;

  //     default:
  //       return toDos ;
  //   }
  // };

  const handelAll = () => {
    setMyState("all");
  };
  const handelComplited = () => {
    setMyState("completed");
  };
  const handelNotComplited = () => {
    setMyState("notCompleted");
  };
  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <button style={{ margin: "5px" }} onClick={handelAll}>All</button>
        <button style={{ margin: "5px" }} onClick={handelComplited}>Complited</button>
        <button style={{ margin: "5px" }} onClick={handelNotComplited}>
          Not Complited
        </button>
      </div>

      {myState == "all" ? toDos.map((el) => (
        <Task element={el} key={el.id} /> 
      )) : myState == "completed" ? toDos.filter((el) => el.isDone==true).map((el) => (
        <Task element={el} key={el.id} />)) : toDos.filter((el) => el.isDone==false).map((el) => (
          <Task element={el} key={el.id} />))}
    </div>
  );
};

export default TaskList;
