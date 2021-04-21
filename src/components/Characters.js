import React from 'react'
import { useSelector } from 'react-redux'

import CharacterCard from './CharacterCard.js'

const Characters = (props) => {
  const characters = useSelector(state => state.characters)
  return (
    <div>
        {characters.map((c) => {
          return <CharacterCard charName={c} />
        })}
    </div>
  )
}

export default Characters