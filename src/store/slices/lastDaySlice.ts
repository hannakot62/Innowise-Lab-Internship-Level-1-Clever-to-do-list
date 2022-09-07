import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastDay: new Date().setMonth(new Date().getMonth() + 1, new Date().getDate()),
};
const lastDaySlice = createSlice({
  name: "lastDay",
  initialState,
  reducers: {
    setLastDay(state, action) {
      state.lastDay = action.payload;
    },
  },
});

export const { setLastDay } = lastDaySlice.actions;
export default lastDaySlice.reducer;
