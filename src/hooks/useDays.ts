import { useDispatch, useSelector } from "react-redux";
import { daysInCurrentMonth } from "@/logic/dateOperations";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "@firebase/firestore";
import { db } from "@/firebase";
import { setTasks } from "@/store/slices/tasksSlice";
import { removeIsLoading, setIsLoading } from "@/store/slices/loadingSlice";
import { removeError, setError } from "@/store/slices/errorSlice";

export interface DayInterface {
  selected: Date;
  day: Date;
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

export function useDays(selectedDay: Date, nextMonthStart: Date) {
  const days: Array<DayInterface> = [];
  const email = useSelector((state: any) => state.user.email);
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const lastDay = useSelector((state: any) => state.lastDay.lastDay);
  const currentDateStart = new Date(new Date().setHours(0, 0, 0));

  // const currentDay = currentDateStart.getDate();

  const daysInCurrentMonthQuantity = daysInCurrentMonth();
  const tasksCollection = query(
    collection(db, "tasks"),
    where("userEmail", "==", email),
    where("date", ">=", Timestamp.fromDate(currentDateStart)),
    where("date", "<", Timestamp.fromDate(nextMonthStart))
  );
  let tasksTemp: Array<Task> = [];
  useEffect(() => {
    const getTasks = async () => {
      try {
        dispatch(setIsLoading());
        await getDocs(tasksCollection)
          .then((tasksDocuments) => {
            tasksDocuments.docs.forEach((doc) => {
              tasksTemp.push({
                id: doc.id,
                userEmail: doc.data().userEmail,
                date: new Date(
                  doc.data().date.seconds * 1000
                ).toLocaleDateString(),
                time: new Date(
                  doc.data().date.seconds * 1000
                ).toLocaleTimeString(),
                done: doc.data().done,
                description: doc.data().description,
                title: doc.data().title,
                originalDateSeconds: doc.data().date.seconds,
              });
            });
            tasksTemp.sort(
              (a: Task, b: Task) =>
                a.originalDateSeconds - b.originalDateSeconds
            );
          })
          .catch((error: any) => {
            if (error.message.includes("Cannot add property")) return;
            dispatch(setError(error.message));
            dispatch(removeIsLoading());
            setTimeout(() => dispatch(removeError()), 2000);
          });
      } catch (error: any) {
        if (error.message.includes("Cannot add property")) return;
        dispatch(setError(error.message));
        dispatch(removeIsLoading());
        setTimeout(() => dispatch(removeError()), 2000);
      }
    };
    getTasks()
      .then(() => {
        dispatch(setTasks(tasksTemp));
        dispatch(removeIsLoading());
      })
      .catch((error) => {
        //??????????????????????
        if (error.message.includes("Cannot add property")) return;
        dispatch(setError(error.message));
        dispatch(removeIsLoading());
        setTimeout(() => dispatch(removeError()), 2000);
      });
  }, [lastDay]);

  const myTasks = useSelector((state: any) => state.tasks.tasks);
  for (
    let iterDay = currentDateStart.setHours(0);
    iterDay < nextMonthStart.setHours(0);

  ) {
    let day = new Date(iterDay);
    let tasksForDay = myTasks.filter(
      (task: Task) => task.date === day.toLocaleDateString()
    );
    let done = tasksForDay.length
      ? tasksForDay.filter((task: any) => task.done).length
      : 0;
    let undone = tasksForDay.length
      ? tasksForDay.filter((task: any) => !task.done).length
      : 0;
    days.push({
      selected: selectedDay,
      day: day,
      tasksDoneQuantity: done,
      tasksUndoneQuantity: undone,
    });
    iterDay += 86400000;
  }
  return days;
}
