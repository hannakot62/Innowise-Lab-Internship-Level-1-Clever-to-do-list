import React, { useEffect } from "react";
import Task from "@/components/Task/Task";
import style from "./TasksList.module.css";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import skaterLight from "@/assets/skater/skater-light.json";

const TasksList = ({ selectedDay }: { selectedDay: Date }) => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const tasksToRender: any = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].date === selectedDay.toLocaleDateString()) {
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
      {tasksToRender.length ? (
        tasksToRender
      ) : (
        <div className={style.skaterContainer}>
          <h1 className={style.chill}>no tasks this day, chill :)</h1>
          <Lottie animationData={skaterLight} loop={true} />{" "}
        </div>
      )}
    </div>
  );
};

export default TasksList;
