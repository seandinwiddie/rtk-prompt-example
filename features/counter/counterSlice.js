// counterSlice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
//import { store, saveStoreState } from "../../store.js"

// Define the initial state of the counter
const initialState = {
  counter: 0,
};

// Create a slice for the counter feature
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Export the actions and reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;