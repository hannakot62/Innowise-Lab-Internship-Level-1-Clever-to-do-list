import React, { useEffect, useState } from "react";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentTask } from "../store/slices/currentTaskSlice";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "@firebase/firestore";
import { db } from "../firebase";
import { removeIsLoading, setIsLoading } from "../store/slices/loadingSlice";
import { setTasks } from "../store/slices/tasksSlice";
import { Task } from "../hooks/useDays";
import { removeError, setError } from "../store/slices/errorSlice";

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
    upd().catch((error) => {
      dispatch(setError(error.message));
      setTimeout(() => dispatch(removeError()), 2000);
    });
    const currentDateStart = new Date(new Date().setHours(0, 0, 0));
    const nextMonthStart = new Date(
      new Date().setMonth(currentDateStart.getMonth() + 1, 1)
    );
    const tasksCollection = query(
      collection(db, "tasks"),
      where("userEmail", "==", email),
      where("date", ">=", Timestamp.fromDate(currentDateStart)),
      where("date", "<=", Timestamp.fromDate(nextMonthStart))
    );
    let tasksTemp: Array<Task> = [];
    const getTasks = async () => {
      dispatch(setIsLoading());
      const tasksDocuments = await getDocs(tasksCollection);
      tasksDocuments.forEach((doc) => {
        tasksTemp.push({
          id: doc.id,
          userEmail: doc.data().userEmail,
          date: new Date(doc.data().date.seconds * 1000).toLocaleDateString(),
          time: new Date(doc.data().date.seconds * 1000).toLocaleTimeString(),
          done: doc.data().done,
          description: doc.data().description,
          title: doc.data().title,
          originalDateSeconds: doc.data().date.seconds,
        });
      });
      tasksTemp.sort(
        (a: any, b: any) => a.originalDateSeconds - b.originalDateSeconds
      );
    };
    getTasks()
      .then(() => {
        dispatch(setTasks(tasksTemp));
        dispatch(removeIsLoading());
      })
      .catch((error) => {
        dispatch(setError(error.message));
        setTimeout(() => dispatch(removeError()), 2000);
      });
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
      <textarea
        className={"description"}
        placeholder={currentDescription}
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
      ></textarea>
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
