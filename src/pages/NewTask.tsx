import React, { useState } from "react";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { db } from "../firebase";

const NewTask = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const isAuth = !!useSelector((state: any) => state.user.id);
  const email = useSelector((state: any) => state.user.email);

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
