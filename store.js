// store.js 📚

// Import the fs module for file I/O operations 💻
import * as fs from 'fs'

// Import the configureStore function from @reduxjs/toolkit 🛠️
import { configureStore } from '@reduxjs/toolkit'

// Define the initial state of the store 📊
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

// Define the counter reducer function 📊
const counterReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'increment':
      // Increment the counter value by 1 ⬆️
      return { counter: state.counter + 1 }
    case 'decrement':
      // Decrement the counter value by 1 ⬇️
      return { counter: state.counter - 1 }
    default:
      // Return the current state if the action type is unknown 🤔
      return state
  }
}

// Create the store using the configureStore function 🛠️
const store = configureStore({
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
export { store, saveStoreState }