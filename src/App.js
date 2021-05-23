import React from 'react'

import { GlobalStyle } from './theme/globalStyle.js'

import Footer from './layout/Footer.js'
import Header from './layout/Header.js'
import Hero from './components/Hero.js'
import AppContaner from './layout/AppContainer.js'
import CharacterSection from './components/CharacterSection.js'
import ReviewCarousel from './components/ReviewCarousel.js'

const App = () => {

  return (
    <div>
      <AppContaner>
        <GlobalStyle />
        <Header />
        <Hero />
        <ReviewCarousel />
        <CharacterSection />
        <Footer />

      </AppContaner>
    </div>
  )
}

export default App