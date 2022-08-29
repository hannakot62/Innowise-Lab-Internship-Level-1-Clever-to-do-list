import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
      console.log(state.tasks);
    },
    removeTasks(state) {
      state.tasks = [];
    },
    taskDoneUndone(state, action) {
      let taskIndex = state.tasks.findIndex(
        (task: any) => task.id === action.payload.id
      );
      // @ts-ignore
      state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
      //TODO: плюс надо менять в бд
    },
    taskAdded() {},
    taskEdited() {},
  },
});

export const { setTasks, removeTasks, taskDoneUndone } = tasksSlice.actions;
export default tasksSlice.reducer;
