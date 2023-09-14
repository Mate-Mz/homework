import { useNavigate } from "react-router-dom";
import { getTasks } from "../store/todo/todo.thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TaksList from "../components/TaksList";

const MainPage = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.todo);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (error) return <div>{error}</div>;
  if (loading)
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  return (
    <div>
      <header className="App-header">
        <h1>ToDo App</h1>
        <button onClick={() => navigate("/create")}>Create Task</button>
      </header>
      <main className="App-main">
        <TaksList isCompletedList={false} />
        <TaksList isCompletedList={true} />
      </main>
    </div>
  );
};

export default MainPage;
