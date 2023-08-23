import { useCallback, useState } from 'react';
import List from '../components/List';

const Wrapper = () => {

    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [removedTasks, setRemovedTasks] = useState(1);

    const onChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const addTask = useCallback(
        (event) => {
            event.preventDefault();
            if(inputValue !== ""){
                const task = {
                    id: tasks.length + completed.length + inProgress.length +removedTasks,
                    title: inputValue
                }

                setTasks((prev) => [...prev, task]);
                setInputValue("");
            }
        },
        [inputValue]
    )
    
    const moveTaskToCompleted = (id, fromArray) => {
        const taskIndex = fromArray.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            const updatedTask = { ...fromArray[taskIndex] };
            setCompleted((prevCompleted) => [...prevCompleted, updatedTask]);
            fromArray.splice(taskIndex, 1);
        }
    };

    const completeTask = useCallback(
        (id) =>{
            moveTaskToCompleted(id, tasks);
            moveTaskToCompleted(id, inProgress);
        },
    )

    const inProgressTask = useCallback(
        (id) => {
            setTasks((prevTasks) => {
                const taskIndex = prevTasks.findIndex((task) => task.id === id);
                const updatedTask = { ...prevTasks[taskIndex] };
                setInProgress((previnProgress) => [...previnProgress, updatedTask]);
                prevTasks.splice(taskIndex, 1);
                return [...prevTasks];
            });
        },
        []
    );

    const removeTask = useCallback(
        (id) => {
            setTasks((prevState) => prevState.filter((task) => task.id !== id));
            setInProgress((prevState) => prevState.filter((task) => task.id !== id));
            setCompleted((prevState) => prevState.filter((task) => task.id !== id));
            setRemovedTasks((prevRemovedTasks) => prevRemovedTasks + 1);
        },
        []
    )

    return (
        <div className='wrapper'>

            <div className='list'>
                <form className="user-form">
                    <input type="text" onChange={onChange} value={inputValue} />
                    <button onClick={addTask}>Add Task</button>
                </form>
                <List
                    tasks={tasks}
                    removeTask={removeTask}
                    completeTask={completeTask}
                    inProgressTask={inProgressTask}
                    showCompleteTask={true}
                />
            </div>
            <div className='list'>
                <List
                    title={"IN PROGRESS"}
                    tasks={inProgress}
                    inProgressTask={false}
                    removeTask={removeTask}
                    completeTask={completeTask}
                />
            </div>
            <div className='list'>
                <List
                    title={"COMPLETED"}
                    tasks={completed}
                    removeTask={removeTask}
                    completeTask={false}
                    inProgressTask={false}
                />
            </div>
        </div>
    );
}

export default Wrapper;
