import { useDispatch, useSelector } from "react-redux";
import { daysInCurrentMonth } from "../logic/dateOperations";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase";
import { setTasks } from "../store/slices/tasksSlice";

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
}

export function useDays() {
  const days: Array<DayInterface> = [];
  const email = useSelector((state: any) => state.user.email);
  const dispatch = useDispatch();

  //добавіть условіе по месяцу
  const tasksCollection = query(
    collection(db, "tasks"),
    where("userEmail", "==", email)
  );

  useEffect(() => {
    const getTasks = async () => {
      const tasksDocuments = await getDocs(tasksCollection);
      let tasksTemp: Array<Task> = [];
      tasksDocuments.forEach((doc) => {
        tasksTemp.push({
          id: doc.data().id,
          userEmail: doc.data().userEmail,
          date: new Date(doc.data().date.seconds * 1000).toLocaleDateString(),
          time: new Date(doc.data().date.seconds * 1000).toLocaleTimeString(),
          done: doc.data().done,
          description: doc.data().description,
          title: doc.data().title,
        });
      });
      dispatch(setTasks(tasksTemp));
    };
    //добавить лоадер??? обработка ошибок???
    getTasks();
  }, []);

  const daysInCurrentMonthQuantity = daysInCurrentMonth();
  const currentDay = new Date().getDate();
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
      selected: currentDay,
      day: iterDay,
      tasksDoneQuantity: done,
      tasksUndoneQuantity: undone,
    });
  }
  console.log("дни в юздейс");
  console.table(days);
  return days;
}
