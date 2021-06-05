import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getCharacter } from '../reducers/characterDetailReducer.js'

import { URI } from '../config.js'
import { backgroundPaper } from '../theme/colors.js'


const CharacterDetailsContainer = styled.div`
  background-color: ${backgroundPaper};
  padding: 2rem;

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

const CharacterNameText = styled.h1`
  grid-area: box-1;
`

const CharacterConstellationText = styled.h3`
  grid-area: box-2

`

const CharacterDescriptionText = styled.p`
  grid-area: box-3
`

const CharacterDetails = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharacter('traveler-anemo'))
  }, [dispatch])
  const currentCharacter = useSelector(state => state.characterDetail)
  console.log(currentCharacter)
  return (
    <CharacterDetailsContainer>
      <CharacterPortrait src={`${URI}/characters/${currentCharacter.charCode}/portrait`} />
      <CharacterNameText>
        {currentCharacter.name}
      </CharacterNameText>
      <CharacterConstellationText>
        {currentCharacter.constellation}
      </CharacterConstellationText>
      <CharacterDescriptionText>
        {currentCharacter.description}
      </CharacterDescriptionText>
    </CharacterDetailsContainer>
  )
}

export default CharacterDetails