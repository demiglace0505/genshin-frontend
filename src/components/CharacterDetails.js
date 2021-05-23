import React from 'react'
import styled from 'styled-components'

import { backgroundPaper } from '../theme/colors.js'

const CharacterDetailsContainer = styled.div`
  background-color: ${backgroundPaper};
`

const CharacterDetails = () => {


  return(
    <CharacterDetailsContainer>
      hello
    </CharacterDetailsContainer>
  )
}

export default CharacterDetails