import React, { useState } from "react";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "@firebase/firestore";
import { db } from "../firebase";
import { Task } from "../hooks/useDays";
import { removeIsLoading, setIsLoading } from "../store/slices/loadingSlice";
import { setTasks } from "../store/slices/tasksSlice";

const NewTask = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const isAuth = !!useSelector((state: any) => state.user.id);
  const email = useSelector((state: any) => state.user.email);
  const dispatch = useDispatch();
  function handleAdd() {
    const add = async () => {
      const docRef = await addDoc(collection(db, "tasks"), {
        title: currentTitle,
        description: currentDescription,
        userEmail: email,
        done: false,
        date: Timestamp.fromDate(new Date(currentTime)),
      });
    };
    add();

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
      console.log(tasksTemp);
    };
    getTasks().then(() => {
      dispatch(setTasks(tasksTemp));
      dispatch(removeIsLoading());
    });

    //TODO: обраюотка?????
  }

  return isAuth ? (
    <div className={"task-config-container"}>
      <h1 className={"new-edit-task"}>New Task</h1>
      <input
        className={"title"}
        type={"text"}
        placeholder={"Title"}
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
      />

      <textarea
        className={"description"}
        placeholder={"Description"}
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
      ></textarea>

      <div className={"time-container"}>
        <h4>Date & Time</h4>
        <input
          className={"input-time"}
          type={"datetime-local"}
          value={currentTime}
          onChange={(e) => setCurrentTime(e.target.value)}
        />
      </div>
      <div className={"buttons-task-config-container"}>
        <TaskConfigButtons>
          <Link className={"link"} to="/todos">
            Cancel
          </Link>
        </TaskConfigButtons>
        <TaskConfigButtons onClick={handleAdd}>
          {" "}
          <Link className={"link"} to="/todos">
            Add{" "}
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

export default NewTask;
