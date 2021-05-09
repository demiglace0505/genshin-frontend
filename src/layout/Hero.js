import React from 'react'
import styled from 'styled-components'

import hero from '../images/hero-0.jpg'
import { colorGreyDark } from '../theme/colors.js'

const HeroContainer = styled.div`
  height: 100vh;
  background-image: url(${hero});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(100px);
`

const HeroText = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Yantramanav&display=swap');
  color: ${colorGreyDark};
  font-family: 'Yantramanav', sans-serif;
`

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        Step Into a Vast Magical World of Adventure
      </HeroText>
    </HeroContainer>
  )
}

export default Hero