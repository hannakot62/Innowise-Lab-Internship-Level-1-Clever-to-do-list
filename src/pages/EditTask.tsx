import React, { useEffect, useState } from "react";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentTask } from "../store/slices/currentTaskSlice";
import { doc, setDoc, Timestamp } from "@firebase/firestore";
import { db } from "../firebase";
import newTask from "./NewTask";

const EditTask = () => {
  const dispatch = useDispatch();
  const isAuth = !!useSelector((state: any) => state.user.id);
  const taskId = useSelector((state: any) => state.currentTask.currentTask);
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const email = useSelector((state: any) => state.user.email);
  const [task] = tasks.filter((task: any) => task.id === taskId);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (task) {
      setCurrentTitle(task.title);
      setCurrentDescription(task.description);
      setCurrentTime(task.time);
    }
  }, [task]);

  function handleSave() {
    const upd = async () => {
      const newDate = new Date(task.originalDateSeconds * 1000);
      newDate.setHours(
        +currentTime.slice(0, 2),
        +currentTime.slice(3, 5),
        +currentTime.slice(6),
        0
      );
      await setDoc(doc(db, "tasks", taskId), {
        description: currentDescription,
        title: currentTitle,
        userEmail: email,
        done: task.done,
        date: Timestamp.fromDate(newDate),
      });
    };
    upd();
    //TODO: обработка???
  }

  function handleCancel() {
    dispatch(removeCurrentTask());
  }

  return isAuth ? (
    <div className={"task-config-container"}>
      <h1 className={"new-edit-task"}>Edit Task</h1>
      <input
        className={"title"}
        type={"text"}
        placeholder={currentTitle}
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
      />
      <hr />
      <textarea
        className={"description"}
        placeholder={currentDescription}
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
      ></textarea>
      <hr />
      <div className={"time-container"}>
        <h4>Time:</h4>
        <input
          className={"input-time"}
          type={"time"}
          value={currentTime}
          onChange={(e) => setCurrentTime(e.target.value)}
        />
      </div>
      <div className={"buttons-task-config-container"}>
        <TaskConfigButtons onClick={handleCancel}>
          {" "}
          <Link className={"link"} to="/todos">
            Cancel{" "}
          </Link>
        </TaskConfigButtons>
        <TaskConfigButtons onClick={handleSave}>
          {" "}
          <Link className={"link"} to="/todos">
            Save
          </Link>
        </TaskConfigButtons>
      </div>
    </div>
  ) : (
    <h1>
      First you need to <Link to={"/"}>sign in</Link>
    </h1>
  );
};

export default EditTask;
