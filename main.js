// rtk-prompt-example 🚀"

import { store, saveStoreState } from './store.js';
import prompt from 'prompt';
import { increment, decrement } from './features/counter/counterSlice.js';

store.subscribe(() => {
  console.log('Current state:', store.getState().counter.counter);
  saveStoreState();
});

const schema = {
  properties: {
    action: {
      description: 'Enter "increment" or "decrement"',
      required: true,
    },
  },
};

prompt.start();

console.log('Initial state:', store.getState().counter.counter);

prompt.get(schema, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  switch (result.action) {
    case 'increment':
      store.dispatch(increment());
      break;
    case 'decrement':
      store.dispatch(decrement());
      break;
    default:
      console.log('Invalid action');
  }
});