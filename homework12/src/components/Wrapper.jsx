import React, { Component } from 'react';
import List from '../components/List';

class Wrapper extends Component {

    state = {
        inputValue: "",
        tasks: [],
        completed: [] 
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({
            inputValue: value
        });
    }

    addTask = (event) => {
        event.preventDefault();
        if(this.state.inputValue !== ""){
            const task = {
                id: this.state.tasks.length +1,
                title: this.state.inputValue
            }
    
            this.setState({
                tasks: [task, ...this.state.tasks],
                inputValue: ""
            });
        }
    }

    completeTask = (id) => {
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        const completedTask = this.state.tasks.find((task) => task.id === id);
        this.setState({
            tasks,
            completed: [completedTask, ...this.state.completed],
        });
    }

    removeTask = (id) => {
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        const completed = this.state.completed.filter((task) => task.id !== id);
        this.setState({
            tasks,
            completed
        });
    }

    render() {
        return (
            <div className='wrapper'>

                <div className='list'>
                    <form className="user-form">
                        <input type="text" onChange={this.onChange} value={this.state.inputValue} />
                        <button onClick={this.addTask}>Add Task</button>
                    </form>
                    <List
                        tasks={this.state.tasks}
                        removeTask={this.removeTask}
                        completeTask={this.completeTask}
                        showCompleteTask={true}
                    />
                </div>
                <div className='list'>
                    <List
                        tasks={this.state.completed}
                        removeTask={this.removeTask}
                        completeTask={this.completeTask}
                        showCompleteTask={false}
                    />
                </div>
            </div>
        );
    }
}

export default Wrapper;
