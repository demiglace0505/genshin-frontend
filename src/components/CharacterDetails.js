import React from 'react'
import styled from 'styled-components'

import { URI } from '../config.js'
import { backgroundPaper } from '../theme/colors.js'

const CharacterDetailsContainer = styled.div`
  background-color: ${backgroundPaper};
  padding: 1rem;

  display: grid;
  grid-gap: .5rem;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: 60% 40%;
  grid-template-areas: "portrait ."
                       "portrait box-1"
                       "portrait box-2"
                       "portrait box-3"
                       "portrait box-4"
                       "portrait box-5"
                       "portrait box-6"
                       "portrait .";
  align-content: center;
  & > * {
    background-color: orangered;
  }
`

const CharacterPortrait = styled.img`
  grid-area: portrait;
  width: 100%;
  align-self: center;
`

const CharacterDetails = () => {


  return (
    <CharacterDetailsContainer>
        <CharacterPortrait src={`${URI}/characters/keqing/portrait`} />
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </CharacterDetailsContainer>
  )
}

export default CharacterDetails