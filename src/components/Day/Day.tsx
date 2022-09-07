import React, { FunctionComponent, useEffect, useState } from "react";
import style from "@/components/Day/Day.module.css";
import TaskRounds from "@/components/TaskRounds/TaskRounds";
import { useSelector } from "react-redux";
import { showMonth } from "@/logic/showMonth";

interface Day {
  slctd: Date;
  day: Date;
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
  const [selected, setSelected] = useState(
    slctd.getDate() === day.getDate() &&
      slctd.getMonth() === day.getMonth() &&
      slctd.getFullYear() === day.getFullYear()
  );
  const theme = useSelector((state: any) => state.theme.theme);
  useEffect(() => {
    setSelected(
      slctd.getDate() === day.getDate() &&
        slctd.getMonth() === day.getMonth() &&
        slctd.getFullYear() === day.getFullYear()
    );
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
        <h1 className={style.day}>{day.getDate()}</h1>
        {day.getDate() === currentDate.getDate() &&
        day.getMonth() === currentDate.getMonth() &&
        day.getFullYear() === currentDate.getFullYear() ? (
          <h4 className={style.today}>today</h4>
        ) : (
          <>
            <h6 className={style.month}>{showMonth(day)}</h6>
            <TaskRounds
              tasksDoneQuantity={tasksDoneQuantity}
              tasksUndoneQuantity={tasksUndoneQuantity}
              selected={selected}
            />{" "}
          </>
        )}
      </div>
    </span>
  );
};

export default Day;
