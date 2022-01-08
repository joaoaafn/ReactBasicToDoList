import React from 'react';

import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
    return (
        <div 
            className="task-container" 
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className="task-tittle" onClick={() => handleTaskClick(task.id)}>
                {task.tittle}
            </div>
        </div>
    )
    
    //return <div className="task-container">{task.tittle}</div>
};

export default Task;