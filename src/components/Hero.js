import React from 'react'
import styled from 'styled-components'

import hero from '../images/hero-0.jpg'
import { colorWhite} from '../theme/colors.js'
import {moveInBottom} from '../theme/animations.js'

const HeroContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  /* background-image: url(${hero}); */
  background-image: linear-gradient(
    rgba(0,0,0,0.4),
    rgba(0,0,0,0.4)),
     url(${hero});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  /* background-blend-mode: darken; */
`

const HeroText = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  font-family: 'DM Serif Display', serif;
  font-weight: bold;
  letter-spacing: 4px;
  user-select: none;
  color: ${colorWhite};
  font-size: 5rem;
  width: 40%;
  text-align: center;
  transition: all .6s;
  animation: ${moveInBottom} 1s ease-out;

  :hover{
    transform: scale(1.1);
    text-shadow: 0 0 15px rgba(255,255,255, 1);
  }
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