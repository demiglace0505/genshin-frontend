import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { searchChange } from '../reducers/characterSearchReducer.js'

const InputBox = styled.input`
  background-color: red;
  width: 90%;
`

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchString = useSelector(state => state.search)

  const handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    dispatch(searchChange(event.target.value))
  }

  return (
    <div>
      <InputBox onChange={handleInputChange}/>
    </div>
  )
}

export default SearchBar