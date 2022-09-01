import { useDispatch, useSelector } from "react-redux";
import { daysInCurrentMonth } from "../logic/dateOperations";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "@firebase/firestore";
import { db } from "../firebase";
import { setTasks } from "../store/slices/tasksSlice";
import { removeIsLoading, setIsLoading } from "../store/slices/loadingSlice";
import { removeError, setError } from "../store/slices/errorSlice";

export interface DayInterface {
  selected: number;
  day: number;
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
}

export interface Task {
  id: string;
  date: string;
  time: string;
  description: string;
  done: boolean;
  title: string;
  userEmail: string;
  originalDateSeconds: number;
}

export function useDays(selectedDay: number) {
  const days: Array<DayInterface> = [];
  const email = useSelector((state: any) => state.user.email);
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const currentDateStart = new Date(new Date().setHours(0, 0, 0));

  const currentDay = currentDateStart.getDate();
  const nextMonthStart = new Date(
    new Date().setMonth(currentDateStart.getMonth() + 1, 1)
  );
  const daysInCurrentMonthQuantity = daysInCurrentMonth();

  const tasksCollection = query(
    collection(db, "tasks"),
    where("userEmail", "==", email),
    where("date", ">=", Timestamp.fromDate(currentDateStart)),
    where("date", "<=", Timestamp.fromDate(nextMonthStart))
  );
  let tasksTemp: Array<Task> = [];

  useEffect(() => {
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
        // dispatch(setError(error.message));
        // setTimeout(() => dispatch(removeError()), 2000);
      });
  }, []);

  const myTasks = useSelector((state: any) => state.tasks.tasks);
  for (
    let iterDay = currentDay;
    iterDay <= daysInCurrentMonthQuantity;
    iterDay++
  ) {
    let tasksForDay = myTasks.filter(
      (task: any) => +task.date.slice(0, 2) === iterDay
    );
    let done = tasksForDay.length
      ? tasksForDay.filter((task: any) => task.done).length
      : 0;
    let undone = tasksForDay.length
      ? tasksForDay.filter((task: any) => !task.done).length
      : 0;
    days.push({
      selected: selectedDay,
      day: iterDay,
      tasksDoneQuantity: done,
      tasksUndoneQuantity: undone,
    });
  }

  return days;
}
