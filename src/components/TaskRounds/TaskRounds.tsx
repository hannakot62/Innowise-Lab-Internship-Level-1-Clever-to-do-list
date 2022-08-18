import React, { FunctionComponent } from "react";
import style from "./TaskRounds.module.css";

interface OwnProps {
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
  selected: boolean;
}

const TaskRounds: FunctionComponent<OwnProps> = ({
  tasksDoneQuantity,
  tasksUndoneQuantity,
  selected,
}) => {
  return (
    <div className={style.roundsContainer}>
      {selected ? (
        <></>
      ) : (
        <>
          {tasksDoneQuantity ? <div className={style.roundDone}></div> : <></>}
          {tasksUndoneQuantity ? (
            <div className={style.roundUndone}></div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default TaskRounds;
