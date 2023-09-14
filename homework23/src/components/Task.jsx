import { useDispatch, useSelector } from "react-redux";
import { deleteTasks, editTasks } from "../store/todo/todo.thunks";
import { useState } from "react";

const Task = ({ taskName, id, isCompletedTask}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const tasks = useSelector((state) => state.todo.tasks);

  const onDelete = () => dispatch(deleteTasks(id));
  const onEdit = () => {
    const onEditTask = tasks.find((task) => task._uuid === id);
    dispatch(
      editTasks({
        editedData: {
          taskName: inputValue,
          isCompleted: onEditTask.isCompleted,
        },
        id: id,
      })
    );
  };
  const onComplete = () => {
    dispatch(
      editTasks({
        editedData: {
          taskName: taskName,
          isCompleted: true,
        },
        id: id,
      })
    );
  };

  return (
    <div className="task-item">
      <h3>Task: {taskName}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />{" "}
      <button onClick={onEdit}>Edit</button>
      <br></br>
      {isCompletedTask && <button onClick={onComplete}>Complete</button>}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;
