import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
};
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
      console.log(state.error, " set error");
    },
    removeError(state) {
      state.error = "";
      console.log(state.error, " after removing");
    },
  },
});

export const { setError, removeError } = errorSlice.actions;
export default errorSlice.reducer;
