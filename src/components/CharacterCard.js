import React from 'react'
import styled from 'styled-components'

import { URI } from '../config.js'

const Card = styled.div`
  cursor: pointer;
  border-radius: 30px;
  border: 2px solid palevioletred;
  padding: 2em;
  margin: 2em;
  transition: 0.5s all;
  :hover {
    transform: scale(1.05);
  }
`

const CharacterCard = (props) => {
  console.log('Character')
  return (
    <Card>
      <img alt={`${props.charName}`} src={`${URI}/characters/${props.charName}/icon`} />
      {props.charName}
    </Card>
  )
}

export default CharacterCard