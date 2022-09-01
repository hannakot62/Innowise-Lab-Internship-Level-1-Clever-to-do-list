import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import style from "./Day.module.css";
import TaskRounds from "../TaskRounds/TaskRounds";
import { useSelector } from "react-redux";

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
  const [selected, setSelected] = useState(slctd === day);
  const theme = useSelector((state: any) => state.theme.theme);
  useEffect(() => {
    setSelected(slctd === day);
  }, [slctd]);

  function handleClick(e: any) {
    unselectAll(day);
    setSelected(true);
    e.currentTarget.classList.add(
      theme == "light" ? style.selectedlight : style.selecteddark
    );
  }

  return (
    <span>
      <div
        className={
          selected
            ? theme == "light"
              ? style.selectedlight
              : style.selecteddark
            : theme == "light"
            ? style.mainContainerlight
            : style.mainContainerdark
        }
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
