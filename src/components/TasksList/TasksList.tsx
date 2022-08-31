import React, { useEffect } from "react";
import Task from "../Task/Task";
import style from "./TasksList.module.css";
import { useSelector } from "react-redux";

const TasksList = ({ selectedDay }: { selectedDay: number }) => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const tasksToRender: any = [];
  for (let i = 0; i < tasks.length; i++) {
    if (+tasks[i].date.slice(0, 2) === selectedDay) {
      tasksToRender.push(
        <Task
          key={tasks[i].id}
          id={tasks[i].id}
          title={tasks[i].title}
          description={tasks[i].description}
          doneT={tasks[i].done}
          time={tasks[i].time}
        />
      );
    }
  }
  useEffect(() => {
    for (let i = 0; i < tasks.length; i++) {
      tasksToRender.push(
        <Task
          key={tasks[i].id}
          id={tasks[i].id}
          title={tasks[i].title}
          description={tasks[i].description}
          doneT={tasks[i].done}
          time={tasks[i].time}
        />
      );
    }
  }, [tasks]);

  return (
    <div className={style.tasks}>
      {tasksToRender.length ? tasksToRender : <h1>chill :)</h1>}
    </div>
  );
};

export default TasksList;
