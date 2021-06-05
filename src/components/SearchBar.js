import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { searchChange } from '../reducers/characterSearchReducer.js'

import {accent, backgroundPaper} from '../theme/colors.js'

const InputBox = styled.input`
  width: 90%;
  background-color: ${backgroundPaper};
  border: none;
  border-radius: 4px;
  padding: .7rem 2rem;
  margin: 0 auto;
  transition: all .2s;

  &:focus {
      outline: none;
      width: 100%;
      background-color: ${accent};
    }
`

const SearchBar = () => {
  const dispatch = useDispatch()
  // const searchString = useSelector(state => state.search)

  const handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    dispatch(searchChange(event.target.value))
  }

  return (
    <div>
      <InputBox placeholder="Find Character" type="text" onChange={handleInputChange}/>
    </div>
  )
}

export default SearchBar