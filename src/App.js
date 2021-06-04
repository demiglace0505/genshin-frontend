import React from 'react'


import { GlobalStyle } from './theme/globalStyle.js'

import Footer from './layout/Footer.js'
import Header from './layout/Header.js'
import Hero from './components/Hero.js'
import AppContainer from './layout/AppContainer.js'
import CharacterSection from './components/CharacterSection.js'
import ReviewCarousel from './components/ReviewCarousel.js'

const App = () => {

  return (
    <div>
      <AppContainer>

        <GlobalStyle />
        <Header />
        <Hero />
        <ReviewCarousel />
        <CharacterSection />
        <Footer />

      </AppContainer>
    </div>
  )
}

export default App