import React from "react";
import style from "./TaskRounds.module.css";
import { useSelector } from "react-redux";

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
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <div className={style.roundsContainer}>
      {!selected && (
        <>
          {Boolean(tasksDoneQuantity) && (
            <div
              className={
                theme == "light" ? style.roundDonelight : style.roundDonedark
              }
            ></div>
          )}

          {Boolean(tasksUndoneQuantity) && (
            <div
              className={
                theme == "light"
                  ? style.roundUndonelight
                  : style.roundUndonedark
              }
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default TaskRounds;
