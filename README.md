# Genshin-frontend

[Scaffolding the App](#scaffolding-the-app)

[Setting up Redux](#setting-up-redux)

[Styling backbone](#styling-backbone)

[Testing framework](#testing-framework)

## Scaffolding the App

For the initial scaffolding of the app, I created a service under ./services/characters.js for fetching the characters from the API.

```jsx
import axios from 'axios'

import { URI } from '../config.js'

const getAllCharacters = async () => {
  const res = await axios.get(`${URI}/characters`)
  console.log('getAllCharacters service', res)
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

> Dependencies needed: redux, react-redux,redux-thunk, 
>
> dev dependencies: redux-devtools-extension

In this section, I initialized rendering of characters with the use of a redux store.

#### Initial boilerplate:

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

##### App.js

```jsx
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {initializeCharacters} from './reducers/characterReducer.js'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCharacters())
  }, [])

  return (
    <div>
      hello world
    </div>
  )
}

export default App
```

##### Characters.js

```jsx
import React from 'react'
import { useSelector } from 'react-redux'

const Characters = (props) => {
  const characters = useSelector(state => state.characters)

  return (
    <div>
      <ul>
        {characters.map((c) => {
          return <Character charName={c} />
        })}
      </ul>
    </div>
  )
}

export default Characters
```

##### Character.js

```jsx
import React from 'react'

import { URI } from '../config.js'

const Character = (props) => {
  console.log('Character')
  return (
    <div>
      <img src={`${URI}/characters/${props.charName}/icon`} />
      {props.charName}
    </div>
  )
}

export default Character
```



## Styling backbone

For the styling framework, styled-components was the framework of choice.

##### Global Reset

A global reset and setting 1 rem into 10px can be performed by making use of styled-component's createGlobalStyle api. I opted to include this declaration in the config.js file.

```scss
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    // defines what 1 rem is
    //62.5/100*16 = 10px
    font-size: 62.5%
  } 

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
  }
`

export {
  URI,
  GlobalStyle
}
```

## Testing framework

For the testing framework of the app, Cypress, an e2e testing library, was used. Alongside cypress, eslint-plugin-cypress was also installed as a dev dependency. The following was added into package.json under eslintConfig.

```json
  "eslintConfig": {
    "extends": [
      ...
      "plugin:cypress/recommended"
    ]
  },
```

