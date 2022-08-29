import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTask: "",
};
const currentTaskSlice = createSlice({
  name: "currentTask",
  initialState,
  reducers: {
    setCurrentTask(state, action) {
      state.currentTask = action.payload;
    },
    removeCurrentTask(state) {
      state.currentTask = "";
    },
  },
});

export const { setCurrentTask, removeCurrentTask } = currentTaskSlice.actions;
export default currentTaskSlice.reducer;
