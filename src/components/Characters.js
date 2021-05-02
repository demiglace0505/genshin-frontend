import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import CharacterCard from './CharacterCard.js'

const CharacterGridContainer = styled.div`
  /* width: 80%; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const Characters = (props) => {
  const characters = useSelector(state => state.characters)
  return (
    <CharacterGridContainer>
        {characters.map((c) => {
          return <CharacterCard charName={c} />
        })}
    </CharacterGridContainer>
  )
}

export default Characters