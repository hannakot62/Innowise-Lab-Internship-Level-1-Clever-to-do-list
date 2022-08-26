import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import style from "./Day.module.css";
import TaskRounds from "../TaskRounds/TaskRounds";

interface Day {
  slctd: number;
  day: number;
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
  unselectAll: Function;
}

const Day: FunctionComponent<Day> = ({
  slctd,
  day,
  tasksDoneQuantity,
  tasksUndoneQuantity,
  unselectAll,
}) => {
  let currentDate = new Date();
  const [selected, setSelected] = useState(slctd === currentDate.getDate());
  console.log("day: ", day, ", selected: ", slctd);
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
        ) : (
          <TaskRounds
            tasksDoneQuantity={tasksDoneQuantity}
            tasksUndoneQuantity={tasksUndoneQuantity}
            selected={selected}
          />
        )}
      </div>
    </span>
  );
};

export default Day;
