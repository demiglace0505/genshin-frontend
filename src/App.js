import React from 'react'

import { GlobalStyle } from './theme/globalStyle.js'

import Footer from './layout/Footer.js'
import Header from './layout/Header.js'
import Hero from './components/Hero.js'
import Container from './layout/Container.js'
import Characters from './components/Characters.js'
import SearchBar from './components/SearchBar.js'
import ReviewCarousel from './components/ReviewCarousel.js'

const App = () => {

  return (
    <div>
      <Container>
        <GlobalStyle />
        <Header />
        <Hero />
        <ReviewCarousel />
        <SearchBar />
        <Characters />
        <Footer />

      </Container>
    </div>
  )
}

export default App