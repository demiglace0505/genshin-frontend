import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import SearchBar from './SearchBar.js'
import CharacterCard from './CharacterCard.js'
import { initializeCharacters } from '../reducers/characterReducer'

import hero5 from '../images/hero-5.jpg'


const CharactersContainer = styled.section`
  grid-column: characterCards-start;
  background-size: cover;
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
  grid-template-rows: repeat(2, minmax(min-content, 1fr));
  grid-auto-flow: column;
  overflow-x: scroll;
`

const CharacterHeading = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  align-self: center;
  margin-top: 2.5rem;
  font-family: 'DM Serif Display', serif;
  font-weight: bold;
  letter-spacing: 4px;
  user-select: none;
  color: #fff;
  font-size: 2.6rem;
  width: 80%;
  text-align: center;
`

const SearchbarContainer = styled.div`
  margin: 3rem auto;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`

const CharacterSelect = () => {
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
    <CharactersContainer>
        <CharacterHeading>
          Take on an epic journey together with Teyvat's lovable characters!
        </CharacterHeading>
        <SearchbarContainer>
          <SearchBar />
        </SearchbarContainer>
        <CharacterSelectorContainer>
          {charactersToShow.map((c) => {
            return <CharacterCard charName={c} />
          })}
        </CharacterSelectorContainer>
      </CharactersContainer>
  )
}

export default CharacterSelect