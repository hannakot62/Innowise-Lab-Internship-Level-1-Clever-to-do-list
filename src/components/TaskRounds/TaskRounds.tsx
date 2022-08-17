import React from 'react';
import style from './TaskRounds.module.css'

const TaskRounds = (props:any) => {
    return (
        <div className={style.roundsContainer}>
            {props.tasksDoneQuantity?<div className={style.roundDone}></div>:<></>}
            {props.tasksUndoneQuantity?<div className={style.roundUndone}></div>:<></>}
        </div>
    );
};

export default TaskRounds;
