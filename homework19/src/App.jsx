import React, { useEffect, useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import useFetch from "./hooks/useFetch";

const REACT_APP_API_KEY="1q2PiwUd6RyXqC4MoC9Dhb6Q1M5qurYU9Gc4pLJgQYeYOr-zxQ";

const App = () => {
  const {response, error, loading} = useFetch({url : "application/json", method : "GET"})
  const toDoList = response?.items.map(task => {
    return {
      name: task.toDoTasks,
      isCompleted: task.isCompleted,
      id: task._uuid,
    }
  }) || []

  const onFormSubmit = (toDoTasks) => {
    fetch("/api/v1/tasksToDo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
      },
      body: JSON.stringify([{ toDoTasks }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response failed");
        return res.json();
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="App">

      <header className="App-header">
        <h1>ToDo App</h1>
      </header>
      
      <main className="App-main">
        
        <ToDoForm onFormSubmit={onFormSubmit} />
        
        <div className="task-list">
          {toDoList.map((tasksToDo) => (
            <div className="task-item" key={tasksToDo.id}>
              <h3>{tasksToDo.name}</h3>
            </div>
          ))}
        
        </div>
      </main>
    </div>
  );
};

export default App;
