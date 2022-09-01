import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import errorReducer from "./slices/errorSlice";
import tasksReducer from "./slices/tasksSlice";
import themeReducer from "./slices/themeSlice";
import currentTaskReducer from "./slices/currentTaskSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    tasks: tasksReducer,
    theme: themeReducer,
    currentTask: currentTaskReducer,
    loading: loadingReducer,
  },
});
