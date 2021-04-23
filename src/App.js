import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GlobalStyle } from './config.js'
import Characters from './components/Characters.js'
import { initializeCharacters } from './reducers/characterReducer.js'


const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initializeCharacters())
  }, [dispatch])



  return (
    <div>
      <GlobalStyle />
      <h1>Serialize yourself</h1>
      <Characters />
    </div>
  )
}

export default App