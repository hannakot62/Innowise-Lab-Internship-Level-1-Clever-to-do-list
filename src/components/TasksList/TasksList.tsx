import React from "react";
import Task from "../Task/Task";
import style from "./TasksList.module.css";

const TasksList = ({ selectedDay }: { selectedDay: number }) => {
  //надо забрать таскі, их кол-во, посчитать сделаные и нет
  return (
    <div className={style.tasks}>
      {/*<h1>chill</h1>*/}
      <Task id={1} />
      <Task id={2} />
      <Task id={3} />
    </div>
  );
};

export default TasksList;
