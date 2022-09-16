import React, { useEffect } from "react";
import Task from "@/components/Task/Task";
import style from "./TasksList.module.css";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import skaterLight from "@/assets/skater/skater-light.json";

const TasksList = ({ selectedDay }: { selectedDay: Date }) => {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const tasksToRender = tasks
    .filter((task: any) => task.date === selectedDay.toLocaleDateString())
    .map((task: any) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        doneT={task.done}
        time={task.time}
      />
    ));

  return (
    <div className={style.tasks}>
      {tasksToRender.length ? (
        tasksToRender
      ) : (
        <div className={style.skaterContainer}>
          <h1 className={style.chill}>no tasks this day, chill :)</h1>
          <Lottie animationData={skaterLight} loop={true} />
        </div>
      )}
    </div>
  );
};

export default TasksList;
