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
    },
    removeError(state) {
      state.error = "";
    },
  },
});

export const { setError, removeError } = errorSlice.actions;
export default errorSlice.reducer;
