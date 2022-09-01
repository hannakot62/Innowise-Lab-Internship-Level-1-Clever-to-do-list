import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    removeIsLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, removeIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
