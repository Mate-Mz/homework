import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTasks } from "../store/todo/todo.thunks";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNewTask = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      dispatch(
        createTasks({
          taskName: inputValue,
          isCompleted: false,
        })
      );
      setInputValue("");
    } else {
      alert("Fill out the form");
    }
  };
  return (
    <div>
      <header className="App-header">
        <h1>ToDo App</h1>
        <button onClick={() => navigate("/")}>Main Page</button>
      </header>
      <form className="todo-form">
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={createNewTask} className="submit-button">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
