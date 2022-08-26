import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
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
  },
});

export const { setTasks, removeTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
