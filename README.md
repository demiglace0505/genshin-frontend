# Genshin-frontend

[Scaffolding the App](#scaffolding-the-app)

[Setting up Redux](#setting-up-redux)

## Scaffolding the App

For the initial scaffolding of the app, I created a service under ./services/characters.js for fetching the characters from the API.

```jsx
import axios from 'axios'

const baseUrl='https://api.genshin.dev'

const getAllCharacters = async () => {
  const res = await axios.get(`${baseUrl}/characters`)
  console.log('getAllCharacters', res)
  return res.data
}

export default {
  getAllCharacters
}
```

The app's functionality can be tested with the following:

```jsx
  const [characters, setCharacters] = useState([])
  const fetchCharacters = async () => {
    try {
      const chars = await characterService.getAllCharacters()
      // console.log('response object', res)
      setCharacters(chars)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])
  console.log(characters)
```

## Setting up Redux

redux, react-redux,redux-thunk, 

dev dependencies: redux-devtools-extension

#### initial boilerplate:

##### store.js

```jsx
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import characterReducer from './reducers/characterReducer.js'

const reducer = combineReducers({
  characters: characterReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
```

##### characterReducer.js

```jsx
import characterService from '../services/characters.js'

const characterReducer = (state=[], action) => {
  switch (action.type) {
    case "INIT_CHARACTERS":
      return action.data
    default:
      return state
  }
}

export const initializeCharacters = () => {
  return async dispatch => {
    const characters = await characterService.getAllCharacters()
    dispatch({
      type: 'INIT_CHARACTERS',
      data: characters
    })
  }
}

export default characterReducer
```

##### index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.js'
import store from './store.js'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
