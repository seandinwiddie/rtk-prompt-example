// store.js 📚

// Import the configureStore function from @reduxjs/toolkit 🛠️
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice.js"
// Import the fs module for file I/O operations 💻
import * as fs from 'fs'

// Create the store using the configureStore function 🛠️
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Define the saveStoreState function to save the state to a file 💾
const saveStoreState = () => {
  // Get the current state of the store 📊
  const state = store.getState().counter

  // Convert the state to JSON data 📊
  const json = JSON.stringify(state, null, 2)

  // Write the JSON data to a file 📄
  fs.writeFileSync('store-state.json', json)
}

// Export the store and saveStoreState function 📦
export { saveStoreState }