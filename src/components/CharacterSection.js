import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import SearchBar from './SearchBar.js'
import CharacterCard from './CharacterCard.js'
import CharacterDetails from './CharacterDetails.js'
import { initializeCharacters } from '../reducers/characterReducer'

import { accent } from '../theme/colors.js'
import hero5 from '../images/hero-5.jpg'

const CharacterSectionContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 
    [ characterCards-start ] 45vw
    [ characterCards-end characterDetails-start ] 5fr;
`

const CharactersContainer = styled.div`
  background-size: cover;
  background-color: ${accent};
  background-image: linear-gradient(
    rgba(0,0,0,0.4),
    rgba(0,0,0,0.4)),
     url(${hero5});
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CharacterSelectorContainer = styled.div`
  /* background-color: yellow; */
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  overflow-x: scroll;
`

const SearchbarContainer = styled.div`
  background-color: green;
  margin: auto;
  padding: 4rem;
`

const CharacterSection = () => {
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
    <CharacterSectionContainer>
      <CharactersContainer>
        <div>
          hello
        </div>
        <SearchbarContainer>
          <SearchBar />
        </SearchbarContainer>
        <CharacterSelectorContainer>
          {charactersToShow.map((c) => {
            return <CharacterCard charName={c} />
          })}
        </CharacterSelectorContainer>
      </CharactersContainer>
      {/* <CharactersContainer>
        {charactersToShow.map((c) => {
          return <CharacterCard charName={c} />
        })}
      </CharactersContainer> */}
      <CharacterDetails>
        hello
      </CharacterDetails>
    </CharacterSectionContainer>
  )
}

export default CharacterSection