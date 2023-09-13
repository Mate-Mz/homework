import { Link } from "react-router-dom";
import { getTasks } from "../store/todo/todo.thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useDispatch();
  const { tasks, error, loading } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading. . .</div>;
  console.log(tasks);
  return (
    <div>
      <main className="App-main">
        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-item" key={task._uuid}>
              <h3>Task: {task.taskName}</h3>
            </div>
          ))}
        </div>
      </main>
      <Link to={"/create"}>create</Link>
    </div>
  );
};

export default MainPage;
