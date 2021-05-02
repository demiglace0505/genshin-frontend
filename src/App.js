import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GlobalStyle } from './config.js'

import Footer from './layout/Footer.js'
import Header from './layout/Header.js'
import Container from './layout/Container.js'
import Characters from './components/Characters.js'
import { initializeCharacters } from './reducers/characterReducer.js'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeCharacters())
  }, [dispatch])

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <div>
        <p>hello</p>
      </div>
      <Characters />
      <Footer />
    </Container>
  )
}

export default App