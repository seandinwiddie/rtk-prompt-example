// rtk-prompt-example

import { store, saveStoreState } from './store.js'
import prompt from 'prompt'

store.subscribe( () => {
  console.log(
    'Current state:',
    store.getState().counter.counter
  )
   // Save state to file on every change
  saveStoreState()
} )

const schema = {
  properties: {
    action: {
      description: 'Enter "increment" or "decrement"',
      required: true,
    },
  },
}

prompt.start()

console.log(
  'Initial state:',
  store.getState().counter.counter
)

prompt.get( schema, ( err, result ) => {
  if ( err ) {
    console.error( err )
    return
  }

  switch (result.action) {
    case 'increment':
      store.dispatch( { type: 'increment' } )
      break
    case 'decrement':
      store.dispatch( { type: 'decrement' } )
      break
    default:
      console.log('Invalid action')
  }
} )