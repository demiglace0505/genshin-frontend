import React from 'react'
import styled, { keyframes } from 'styled-components'

import { URI } from '../config.js'
import { fadeIn } from '../theme/animations'


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: orange;
  width: 150px;
  height: 90%;

  border-radius: 10px;
  border: 2px solid palevioletred;
  padding: 1rem;
  margin: .7rem;
  transition: 0.5s all;

  animation: ${fadeIn} 0.6s;

  :hover {
    transform: scale(1.05);
  }
`

const CharacterIcon = styled.img`
  /* display: inline-block; */
  background-color: #444444;
  border-radius: 30px;
  border: 2px solid brown;
  width: 128px;
`

const CharacterName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap');
  font-family: 'Arima Madurai', cursive;
  width: 70%;
  word-break: break-word;
  text-align: center;
  margin-top: .5rem;
  text-transform: capitalize;
`

const CharacterCard = (props) => {
  console.log('Character')
  return (
    <Card>
      <CharacterIcon alt={`${props.charName}`} src={`${URI}/characters/${props.charName}/icon`} />
      <CharacterName>
        {props.charName}
      </CharacterName>
    </Card>
  )
}

export default CharacterCard