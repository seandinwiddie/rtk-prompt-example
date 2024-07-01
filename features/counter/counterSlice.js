// counterSlice

// Import the fs module for file I/O operations 💻
import * as fs from 'fs'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Define the initial state of the counter 📊
const initialState = () => {
  try {
    // Read the store state from a file 📄
    const json = fs.readFileSync('store-state.json', 'utf8')

    // Parse the JSON data into a JavaScript object 📊
    return JSON.parse(json)
  } catch (error) {
    // Return a default state if the file doesn't exist or there's an error 🙅‍♂️
    return { counter: 0 }
  }
}

// Create a slice for the counter feature
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Increment the counter value by 1 ⬆️
      return { counter: state.counter + 1 }
    },
    decrement: (state) => {
      // Decrement the counter value by 1 ⬇️
      return { counter: state.counter - 1 }
    },
  },
});

// Export the actions and reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;