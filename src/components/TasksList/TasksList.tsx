import React from "react";
import Task from "../Task/Task";
import style from "./TasksList.module.css";
import { useSelector } from "react-redux";

const TasksList = ({ selectedDay }: { selectedDay: number }) => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const tasksToRender = [];
  for (let i = 0; i < tasks.length; i++) {
    tasksToRender.push(
      <Task
        key={i}
        id={i}
        title={tasks[i].title}
        description={tasks[i].description}
        doneT={tasks[i].done}
        time={tasks[i].time}
      />
    );
  }
  return (
    <div className={style.tasks}>
      {tasksToRender.length ? tasksToRender : <h1>chill :)</h1>}
    </div>
  );
};

export default TasksList;
