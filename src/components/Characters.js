import React from 'react'
import { useSelector } from 'react-redux'

const Characters = (props) => {
  const characters = useSelector(state => state.characters)

  return (
    <div>
      <ul>
        {characters.map((c) => {
          return <li key={c}>{c}</li>
        })}
      </ul>
    </div>
  )
}

export default Characters