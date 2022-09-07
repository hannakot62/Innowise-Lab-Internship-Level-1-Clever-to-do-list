import { useDispatch, useSelector } from "react-redux";
import { removeIsLoading, setIsLoading } from "@/store/slices/loadingSlice";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "@firebase/firestore";
import { removeError, setError } from "@/store/slices/errorSlice";
import { setTasks } from "@/store/slices/tasksSlice";
import { Task } from "@/hooks/useDays";
import { db } from "@/firebase";
import { setLastDay } from "@/store/slices/lastDaySlice";

export const options = {
  root: document.getElementsByClassName("days-container")[0],
  rootMargin: "0px",
  threshold: 1.0,
};

export const callback = function (entries: any, observer: any) {
  /* Content excerpted, show below */

  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const email = useSelector((state: any) => state.user.email);
  const nextMonthStart = useSelector((state: any) => state.lastDay.lastDay);
  const currentDateStart = new Date(new Date().setHours(0, 0, 0));
  const newNextMonthStart = new Date(
    new Date(nextMonthStart).setMonth(nextMonthStart.getMonth() + 1)
  );
  dispatch(setLastDay(newNextMonthStart));
  console.log(newNextMonthStart, " 5555555555555555555555555555");
  const tasksCollection = query(
    collection(db, "tasks"),
    where("userEmail", "==", email),
    where("date", ">=", Timestamp.fromDate(currentDateStart)),
    where("date", "<", Timestamp.fromDate(nextMonthStart))
  );
  let tasksTemp: Array<Task> = [];

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
            (a: Task, b: Task) => a.originalDateSeconds - b.originalDateSeconds
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

  entries.forEach((entry: any) => {
    entry.time; // a DOMHightResTimeStamp indicating when the intersection occurred.
    entry.rootBounds; // a DOMRectReadOnly for the intersection observer's root.
    entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
    entry.intersectionRect; // a DOMRectReadOnly for the visible portion of the intersection observer's target.
    entry.intersectionRatio; // the number for the ratio of the intersectionRect to the boundingClientRect.
    entry.target; // the Element whose intersection with the intersection root changed.
    if (entry.isIntersecting) {
      getTasks()
        .then(() => {
          dispatch(setTasks(tasksTemp));
          dispatch(removeIsLoading());
        })
        .catch((error) => {
          if (error.message.includes("Cannot add property")) return;
          dispatch(setError(error.message));
          dispatch(removeIsLoading());
          setTimeout(() => dispatch(removeError()), 2000);
        });
    } // intersecting: true or false
  });
};
export const observer = new IntersectionObserver(callback, options);
export const target =
  document.getElementsByClassName("days-container")[0].lastElementChild;
// @ts-ignore
observer.observe(target);
