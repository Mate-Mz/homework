import { useState } from "react";

const ToDoForm = ({onFormSubmit}) => {
  const [toDoTasks, setToDoTasks] = useState();


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(toDoTasks);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={e => setToDoTasks(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
