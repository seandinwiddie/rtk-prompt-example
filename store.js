import * as fs from 'fs'
import { configureStore } from '@reduxjs/toolkit'

const initialState = () => {
  try {
    const json = fs.readFileSync( 'store-state.json', 'utf8' )

//console.log( json )

    return JSON.parse( json )
  } catch ( error ) {
    return { counter: 0 }
  }
}

const counterReducer = ( state = initialState(), action ) => {
  switch ( action.type ) {
    case 'increment':
      return { counter: state.counter + 1 }
    case 'decrement':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

const store = configureStore( {
  reducer: {
    counter: counterReducer,
  },
} )

const saveStoreState = () => {
  const state = store.getState().counter

//console.log( state )

  const json = JSON.stringify( state, null, 2 )
  fs.writeFileSync( 'store-state.json', json )
}

export { store, saveStoreState }