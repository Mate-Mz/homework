import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaksList = ({isCompletedList}) => {
  const { tasks } = useSelector((state) => state.todo);
  return (
    <div className="task-list">
      <h1>{isCompletedList? "Completed Tasks" : "Tasks To Do"}</h1>
      {tasks.map((task) => {
        if (task.isCompleted === isCompletedList){
          return (
            <Task taskName={task.taskName} id={task._uuid} isCompletedTask={!isCompletedList} key={task._uuid} />
          );
        }
        return null
      })}
    </div>
  );
};

export default TaksList;
