// rtk-prompt-example 🚀"

// Import the store and saveStoreState function from store.js 📚
import { store, saveStoreState } from './store.js';

// Import the prompt library for creating a command-line interface 📊
import prompt from 'prompt';

// Import the increment and decrement actions from counterSlice.js 🔄
import { increment, decrement } from './features/counter/counterSlice.js';

// Subscribe to the store and log the current state on every change 🔍
store.subscribe(() => {
  console.log('Current state:', store.getState().counter.counter);
  // Save the state to a file on every change 💾
  saveStoreState();
});

// Define the prompt schema for the command-line interface 📝
const schema = {
  properties: {
    action: {
      description: 'Enter "increment" or "decrement"', // Prompt the user to enter an action
      required: true, // Make sure the user enters a value
    },
  },
};

// Start the prompt interface 📊
prompt.start();

// Log the initial state of the counter 📊
console.log('Initial state:', store.getState().counter.counter);

// Get user input using the prompt interface 📝
prompt.get(schema, (err, result) => {
  if (err) {
    console.error(err); // Handle any errors that occur
    return;
  }

  // Handle the user's input based on the action type 🤔
  switch (result.action) {
    case 'increment':
      // Dispatch the increment action to update the counter ⬆️
      store.dispatch(increment());
      break;
    case 'decrement':
      // Dispatch the decrement action to update the counter ⬇️
      store.dispatch(decrement());
      break;
    default:
      console.log('Invalid action'); // Handle invalid user input
  }
});