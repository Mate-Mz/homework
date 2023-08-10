import React from 'react';
import Item from './Item';

const List = ({tasks, removeTask, completeTask, showCompleteTask}) => (
    <div>
        {tasks.map((item) => (
            <Item
                key={item.id}
                title={item.title}
                id={item.id}
                showCompleteButton={showCompleteTask}
                remove={removeTask}
                complete={completeTask}
            />
        ))}
    </div>
);

export default List;
