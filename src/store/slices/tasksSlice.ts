import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { day: 27, done: true },
    { day: 29, done: true },
    { day: 29, done: false },
    { day: 28, done: true },
    { day: 27, done: false },
  ],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload.tasks;
    },
    removeTasks(state) {
      state.tasks = [];
    },
    taskDoneUndone(state, action) {
      let taskIndex = state.tasks.findIndex(
        (task: any) => task.id === action.payload
      );
      // @ts-ignore
      state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
    },
    taskAdded() {},
    taskEdited() {},
  },
});

export const { setTasks, removeTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
