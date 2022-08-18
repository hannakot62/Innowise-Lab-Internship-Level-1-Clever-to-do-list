import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import style from "./Day.module.css";
import TaskRounds from "../TaskRounds/TaskRounds";

interface OwnProps {
  slctd: number;
  day: number;
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
  unselectAll: Function;
}

const Day: FunctionComponent<OwnProps> = ({
  slctd,
  day,
  tasksDoneQuantity,
  tasksUndoneQuantity,
  unselectAll,
}) => {
  let currentDate = new Date();
  const [selected, setSelected] = useState(slctd === currentDate.getDate());

  useEffect(() => {
    setSelected(slctd === day);
  }, [slctd]);

  function handleClick(e: any) {
    unselectAll(day);
    setSelected(true);
    e.currentTarget.classList.add(style.selected);
  }

  return (
    <span>
      <div
        className={selected ? style.selected : style.mainContainer}
        onClick={handleClick}
      >
        <h1>{day}</h1>
        {day === currentDate.getDate() ? (
          <h4 className={style.today}>today</h4>
        ) : selected ? (
          <div style={{ height: "5vh" }}></div>
        ) : (
          <TaskRounds
            tasksDoneQuantity={tasksDoneQuantity}
            tasksUndoneQuantity={tasksUndoneQuantity}
          />
        )}
      </div>
    </span>
  );
};

export default Day;
