import React from 'react'
import styled from 'styled-components'


import CharacterDetails from './CharacterDetails.js'
import CharacterSelect from './CharacterSelect.js'


const CharacterSectionContainer = styled.section`
  scroll-snap-align: center;
  height: 100vh;
  display: grid;
  grid-template-columns: 
    [ characterCards-start ] 45vw
    [ characterCards-end characterDetails-start ] minmax(55vw, max-content);
`

const CharacterSection = () => {
  return (
    <CharacterSectionContainer>
      <CharacterSelect />

      <CharacterDetails>
        hello
      </CharacterDetails>
    </CharacterSectionContainer>
  )
}

export default CharacterSection