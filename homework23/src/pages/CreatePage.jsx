import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createTasks } from "../store/todo/todo.thunks";

const CreatePage = () => {
  const dispatch = useDispatch();

  const createNewTask = () => {
    dispatch(
      createTasks({
        taskName: "New Task",
        userName: "New UserName",
        deadline: 23,
        isCompleted: false,
      })
    );
  };
  return (
    <div>
      CreatePage
      <button onClick={createNewTask}>Create</button>
      <Link to={"/"}>Main</Link>
    </div>
  );
};

export default CreatePage;
