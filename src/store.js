import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import characterReducer from './reducers/characterReducer.js'
import characterSearchReducer from './reducers/characterSearchReducer.js'
import characterDetailReducer from './reducers/characterDetailReducer.js'

const reducer = combineReducers({
  characters: characterReducer,
  search: characterSearchReducer,
  characterDetail: characterDetailReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store