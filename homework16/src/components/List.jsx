import React from 'react';
import Item from './Item';

const List = ({ tasks, removeTask, completeTask, inProgressTask, title}) => {
    return (
    <div>
        <h1>{title}</h1>
        {tasks.map((item) => (
        <Item
            key={item.id}
            title={item.title}
            id={item.id}
            inProgress={inProgressTask}
            remove={removeTask}
            complete={completeTask}
        />
        ))}
    </div>
    );
}


export default React.memo(List);
