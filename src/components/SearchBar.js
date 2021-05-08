import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchChange } from '../reducers/characterSearchReducer.js'

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
      filter <input onChange={handleInputChange} />
      {searchString}
    </div>
  )
}

export default SearchBar