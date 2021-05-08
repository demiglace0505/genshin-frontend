import React from 'react'


import { GlobalStyle } from './config.js'

import Footer from './layout/Footer.js'
import Header from './layout/Header.js'
import Container from './layout/Container.js'
import Characters from './components/Characters.js'
import SearchBar from './components/SearchBar.js'


const App = () => {

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <div>
        this is a hero
      </div>
      <SearchBar />
      <Characters />
      <Footer />
    </Container>
  )
}

export default App