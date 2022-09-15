import React, { useContext } from "react";
import style from "./TaskRounds.module.css";
import { ThemeContext } from "@/theme-context/context";

interface OwnProps {
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
  selected: boolean;
}

const TaskRounds: React.FC<OwnProps> = ({
  tasksDoneQuantity,
  tasksUndoneQuantity,
  selected,
}) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className={style.roundsContainer}>
      {!selected && (
        <>
          {Boolean(tasksDoneQuantity) && (
            <div className={style.roundDone}></div>
          )}

          {Boolean(tasksUndoneQuantity) && (
            <div className={style.roundUndone}></div>
          )}
        </>
      )}
    </div>
  );
};

export default TaskRounds;
