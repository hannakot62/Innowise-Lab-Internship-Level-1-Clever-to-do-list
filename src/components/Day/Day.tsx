import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import style from "./Day.module.css";
import TaskRounds from "../TaskRounds/TaskRounds";

interface OwnProps {
  slctd: boolean;
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
  const [selected, setSelected] = useState(slctd);
  const ref = useRef(null);
  useEffect(() => {
    if (day === currentDate.getDate()) {
      setSelected(true);
    }
  }, [selected, day, currentDate]);
  useEffect(() => {
    setSelected(slctd);
  }, [slctd]);
  useEffect(() => {
    if (!selected) {
      console.log("askgajhdahdsjsdg");
      console.log(ref.current);
      // ref.current;
    }
  }, [selected]);
  function handleClick(e: any) {
    unselectAll();
    setSelected(true);
    e.currentTarget.classList.add(style.selected);
  }
  return (
    <span>
      <div ref={ref} className={style.mainContainer} onClick={handleClick}>
        <h1>{day}</h1>
        {day === currentDate.getDate() ? (
          <h4 className={style.today}>today</h4>
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
