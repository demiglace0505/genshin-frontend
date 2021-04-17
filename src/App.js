import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Characters from './components/Characters.js'
import { initializeCharacters } from './reducers/characterReducer.js'

const App = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(initializeCharacters())
  }, [dispatch]) //avoiding eslint error

  return (
    <div>
      <Characters />
    </div>
  )
}

export default App