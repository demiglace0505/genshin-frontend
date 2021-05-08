import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import CharacterCard from './CharacterCard.js'
import { initializeCharacters } from '../reducers/characterReducer'

const CharacterGridContainer = styled.div`
  /* width: 80%; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const Characters = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCharacters())
  }, [dispatch])

  const searchFilter = useSelector(state => state.search)
  const characters = useSelector(state => state.characters)

  const charactersToShow = searchFilter === ''
    ? characters
    : characters.filter((c) => c.includes(searchFilter))

  return (
    <CharacterGridContainer>
        {charactersToShow.map((c) => {
          return <CharacterCard charName={c} />
        })}
    </CharacterGridContainer>
  )
}

export default Characters