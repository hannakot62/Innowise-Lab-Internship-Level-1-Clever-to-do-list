import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import errorReducer from "@/store/slices/errorSlice";
import tasksReducer from "@/store/slices/tasksSlice";
import currentTaskReducer from "@/store/slices/currentTaskSlice";
import loadingReducer from "@/store/slices/loadingSlice";
import lastDayReducer from "@/store/slices/lastDaySlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    tasks: tasksReducer,
    currentTask: currentTaskReducer,
    loading: loadingReducer,
    lastDay: lastDayReducer,
  },
});
