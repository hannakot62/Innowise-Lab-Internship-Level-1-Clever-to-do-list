import React, { useEffect, useState } from "react";
import style from "./Day.module.css";
import TaskRounds from "@/components/TaskRounds/TaskRounds";
import { showMonth } from "@/logic/showMonth";
import { dayStyle, isDayToday } from "@/components/Day/helpers";

type Day = {
  slctd: Date;
  day: Date;
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
  unselectAll: Function;
};

const Day: React.FC<Day> = ({
  slctd,
  day,
  tasksDoneQuantity,
  tasksUndoneQuantity,
  unselectAll,
}) => {
  const [selected, setSelected] = useState(
    slctd.getDate() === day.getDate() &&
      slctd.getMonth() === day.getMonth() &&
      slctd.getFullYear() === day.getFullYear()
  );

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
  }

  return (
    <span>
      <div className={dayStyle(selected)} onClick={handleClick}>
        <h1 className={style.day}>{day.getDate()}</h1>
        {isDayToday(day) ? (
          <h4 className={style.today}>today</h4>
        ) : (
          <>
            <h6 className={style.month}>{showMonth(day)}</h6>
            <TaskRounds
              tasksDoneQuantity={tasksDoneQuantity}
              tasksUndoneQuantity={tasksUndoneQuantity}
              selected={selected}
            />
          </>
        )}
      </div>
    </span>
  );
};

export default Day;
